var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUser = function(githubuser) {
  $.get('https://api.github.com/users/' + githubuser + '? access_token=' + apiKey).then(function(response) {
    console.log(response);
    $('.username').html('<h2 id="githubuser">' + response.name + '</h2><img id="user-avatarImage" src=' + response.avatar_url + '>');
  }).fail(function(error) {

    $('#error').text(githubuser + ' could not be found, please enter a valid username');

  });
  $.get('https://api.github.com/users/' + githubuser + '/repos?access_token=' + apiKey).then(function(response) {
    for (var n = 0; n <= response.length; n++)
      // $('#repo').empty();
      if (response[n].description === null) {
        $('#repo').append('<a target="_blank" href="' + response[n].html_url + '"><p>' + response[n].name + '</p><p>Oops no description here!!!! </p></a><');
      } else {
        $('#repo').append('<a target="_blank" href="' + response[n].html_url + '"><p>' + response[n].name + '</p><p>' + response[n].description + '</p></a>');
      }
    // console.log(response);
  }).fail(function(error) {

  });
};


exports.userModule = User;
