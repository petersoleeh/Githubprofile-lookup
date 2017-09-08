var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUser = function(githubuser){
  $.get('https://api.github.com/users/' + githubuser + '? access_token=' + apiKey).then(function(response){

    console.log(response);

  }).fail(function(error){
    $('#error').text(error.responseJSON.message);
  });
}; 


exports.userModule = User;

