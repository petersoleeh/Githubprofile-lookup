var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUser = function(githubuser){
  $.get('https://api.github.com/users/' + githubuser + '? access_token=' + apiKey).then(function(response){
  	
    console.log(response);
    $('.img-avatar').html('<h2 id="user-name">' + response.name + '</h2><img id="user-avatarImage" src=' + response.avatar_url + '>');
  

  }).fail(function(error){
    // $('#error').text(githubuser + ' could not be found, please enter a valid username');
  
}); 
};

User.prototype.getRepos = function(githubuser){
  $.get('https://api.github.com/users/' + githubuser + '/repos?access_token=' + apiKey).then(function(response){
  	for (var n = 0; n <= response.length; n++)
      $('#repo').append('<li><a target="_blank" href="' + response[n].html_url + '"><p>' + response[n].name +'</p><p>' + response[n].description + '</p></a></li>');
    // console.log(response);
   
  }).fail(function(error){
  
  });
};


exports.userModule = User;

