'use strict'

class TextIntersectionsUtil {
	#compareTexts = (text1, text2) => {
    const text1Words = text1.split(" ");
    const text2Words = text2.split(" ");
  
    const commonWords = text1Words.filter(word => text2Words.includes(word));
    const intersectionPercent = (commonWords.join(" ").length / (text1.length + text2.length)) * 100;
    
    return Math.round(intersectionPercent);
  }

	getIntersectionPercent = (text1, text2) => {
		const text1Length = text1.length
		const text2Length = text2.length

		if (text1Length === text2Length) {
			return this.#compareTexts(text1, text2)
		}

		if (text1Length > text2Length) {
			return this.#compareTexts(text1, text2)
		}

		return this.#compareTexts(text2, text1)
	}
}

module.exports = new TextIntersectionsUtil()
