export class StringManipulation {
  static wordCount = (sentence, maxWordCount) => {
    const wordArray = sentence.split(' ');
    const newSentence = [];
    const wordLimit = maxWordCount - 1;
    for (let i = 0; i < wordLimit; i++) {
      newSentence.push(wordArray[i]);
    }
    return newSentence.join(' ');
  };
}
