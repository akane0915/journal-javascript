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
    $('#output').append(`<p>Teaser sentence = ${teaserSentence}.</p>`);
  });
}); //doc ready close
