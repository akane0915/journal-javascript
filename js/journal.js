function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function() {
  arrayOfWords = this.body.split(" ");
  numOfWords = arrayOfWords.length;
  return numOfWords;
};

exports.entryModule = Entry;
