function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function() {
  arrayOfWords = this.body.split(" ");
  numOfWords = arrayOfWords.length;
  return numOfWords;
};

Entry.prototype.numberOfVowels = function() {
  arrayOfVowels = ["a","e","i","o","u"];
  arrayOfLetters = this.body.split("");
  numOfVowels = 0;
  arrayOfLetters.forEach(function(letter){
    if (arrayOfVowels.includes(letter)) {
      numOfVowels += 1;
    }
  });
  return numOfVowels;
}

Entry.prototype.numberOfConsonants = function() {
  arrayOfConsonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "y", "z"];
  arrayOfLetters = this.body.split("");
  numOfConsonants = 0;
  arrayOfLetters.forEach(function(letter){
    if (arrayOfConsonants.includes(letter)) {
      numOfConsonants += 1;
    }
  });
  return numOfConsonants;
}

Entry.prototype.getTeaser = function () {
  debugger;
  firstSentence = this.body.split(".")[0];
  teaserArray = firstSentence.split(" ");
  if (teaserArray.length > 8) {
    teaserArray = teaserArray.slice(0, 8);
  }
  teaserSentence = teaserArray.join(" ");
  return teaserSentence;
}

exports.entryModule = Entry;
