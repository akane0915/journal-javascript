var Entry = require("./../js/journal.js").entryModule;

$(function(){
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var numberOfWords = newEntry.numberOfWords();
    $('#output').append('Number of words in journal entry body = ' + numberOfWords);
  });
}); //doc ready close
