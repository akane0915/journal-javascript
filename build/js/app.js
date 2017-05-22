(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Entry = require("./../js/journal.js").entryModule;

$(function(){
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var numberOfWords = newEntry.numberOfWords();
    var numberOfVowels = newEntry.numberOfVowels();
    var numberOfConsonants = newEntry.numberOfConsonants();
    debugger;
    var teaserSentence = newEntry.getTeaser();
    $('#output').text("");
    $('#output').append(`<p>Number of words in journal entry body = ${numberOfWords}</p>`);
    $('#output').append(`<p>Number of vowels in journal entry body = ${numberOfVowels}</p>`);
    $('#output').append(`<p>Number of consonants in journal entry body = ${numberOfConsonants}</p>`);
    $('#output').append(`<p>Teaser sentence = ${teaserSentence}</p>`);
  });
}); //doc ready close

},{"./../js/journal.js":1}]},{},[2]);
