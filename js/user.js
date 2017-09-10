var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUser = function(githubuser, displayFunction){
  $.get('https://api.github.com/users/' + githubuser + '? access_token=' + apiKey).then(function(response){
  	displayFunction(response.name, response.avatar_url, response.public_repos);
    console.log(response);

  }).fail(function(error){
    $('#error').text( githubuser +  ' could no be found, please enter a valid username.');
  });
}; 
User.prototype.getRepos = function(githubuser, displayRepos){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
  	
    console.log(response);
    displayRepos(response);

  }).fail(function(error){
  
  });
};


exports.userModule = User;

