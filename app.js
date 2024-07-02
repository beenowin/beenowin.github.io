const express = require("express");
const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const morgan = require("morgan");
const cors = require("cors");

const { TextIntersectionsUtil } = require("./utils");
const {
  CHANNEL_FIELD_NAME_LIST,
  INTERSECTION_DEFAULT_PERCENT,
} = require("./config");
const categories = require("../data/categories.json");

const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(errorHandler);
app.use(
  cors({
    origin: "*",
  })
);

const stringStripHtml = (html) => {
  const $ = cheerio.load(html);
  return $.text();
};

// Middleware to handle errors
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.json({ error: err.message });
}

// Create a new post
app.post("/api/posts", async (req, res, next) => {
  try {
    const isCreated = await knex("posts").where({ id: req.body.id }).first();
    if (isCreated) {
      throw new Error("Post already exists " + req.body.id);
    }
    const post = await knex("posts").insert(req.body);
    console.log("Post created", post);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// Get a post by id
app.get("/api/posts/:id", async (req, res, next) => {
  try {
    const post = await knex("posts").where({ id: req.params.id }).first();
    if (!post) {
      res.status(404).json({ error: "Post not found", id: req.params.id });
      return;
    }
    const result = { ...post };
    if (!post.hasChildren) {
      res.json(result);
      return;
    }
    result.childrens = await knex("posts")
      .where({ parentId: post.id })
      .orderBy("date", "desc");
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// List posts with pagination
app.get("/api/posts", async (req, res, next) => {
  try {
    const pageSize = parseInt(req.query.pageSize) || 10;
    const page = parseInt(req.query.page) || 1;
    const skip = pageSize * (page - 1);
    const query = knex("posts").whereNull("parentId");

    if (req.query.channels) {
      query.where((builder) => {
        CHANNEL_FIELD_NAME_LIST.forEach((field) => {
          builder.orWhereIn(field, req.query.channels);
        });
      });
    }

    let rows = await query.limit(pageSize).offset(skip).orderBy("date", "desc");
    const rowsHasChildren = rows.filter((row) => row.hasChildren);

    if (rowsHasChildren.length > 0) {
      for (const row of rows) {
        if (!row.hasChildren) continue;
        row.childrens = await knex("posts")
          .where({ parentId: row.id })
          .orderBy("date", "asc");
      }
    }

    rows.forEach((row) => {
      row.imgsList = JSON.parse(row.imgsList)
      row.childrens = JSON.parse(row.childrens)
    })

    const total = await knex("posts").count("* as count").first();
    res.json({ rows, page, pageSize, total: total.count });
  } catch (err) {
    next(err);
  }
});

// Get the last posts by channel
app.get("/api/posts/last", async (req, res, next) => {
  try {
    const posts = await knex("posts")
      .where((builder) => {
        CHANNEL_FIELD_NAME_LIST.forEach((field) => {
          builder.orWhere(field, req.query.channel);
        });
      })
      .limit(2);
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

// Update a post by id
app.put("/api/posts/:id", async (req, res, next) => {
  try {
    await knex("posts").where({ id: req.params.id }).update(req.body);
    const updatedPost = await knex("posts")
      .where({ id: req.params.id })
      .first();
    res.json(updatedPost);
  } catch (err) {
    next(err);
  }
});

// Check if a post has a parent
app.get("/api/posts/:id/hasParent", async (req, res, next) => {
  try {
    const { id } = req.params;
    const createdPost = await knex("posts").where({ id }).first();
    if (!createdPost.content) {
      res.json({ hasParent: false });
      return;
    }
    const createdPostContent = stringStripHtml(createdPost.content);
    const posts = await knex("posts")
      .where("id", "!=", id)
      .andWhere("date", ">", Date.now() - 10800000); // 3 hours in milliseconds

    for (const post of posts) {
      let intersectionPercent = 0;
      if (post.content) {
        const stripedContent = stringStripHtml(post.content);
        intersectionPercent = TextIntersectionsUtil.getIntersectionPercent(
          createdPostContent.result,
          stripedContent.result
        );
      }
      if (intersectionPercent > INTERSECTION_DEFAULT_PERCENT) {
        const parentId = post.parentId || post.id;
        await knex("posts").where({ id: createdPost.id }).update({ parentId });
        const parentPost = await knex("posts").where({ id: parentId }).first();
        await knex("posts")
          .where({ id: parentPost.id })
          .update({
            hasChildren: true,
            childrenCount: parentPost.childrenCount + 1,
          });
      }
    }
    res.json({ hasParent: true });
  } catch (err) {
    next(err);
  }
});

app.get("/api/channels", async (req, res, next) => {
  try {
    const isChannelsTableExists = await knex.schema.hasTable("channels");

    let channels = [];

    if (isChannelsTableExists) {
      const dbChannels = await knex("channels").orderBy("date", "desc");

      if (dbChannels.length) {
        channels = channels.concat(dbChannels);
      }
    }

    res.json(channels);
  } catch (err) {
    next(err);
  }
});

app.get("/api/categories", async (req, res, next) => {
  try {
    res.json(categories)
  } catch {
    next(err)
  }
})

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
