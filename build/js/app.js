(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "84127e6dc740402031a4458e635b6e7efdc278ef"
},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function User() {}

User.prototype.getUser = function(githubuser){
  $.get('https://api.github.com/users/' + githubuser + '? access_token=' + apiKey).then(function(response){
  	 console.log(response);
    $('.username').html('<h2 id="githubuser">' + response.name + '</h2><img id="user-avatarImage" src=' + response.avatar_url + '>');
  }).fail(function(error){
    $('error').empty();
    $('#error').text(githubuser + ' could not be found, please enter a valid username');
  
}); 
  $.get('https://api.github.com/users/' + githubuser + '/repos?access_token=' + apiKey).then(function(response){
  	for (var n = 0; n <= response.length; n++)
      // $('#repo').empty();
      $('#repo').append('<li><a target="_blank" href="' + response[n].html_url + '"><p>' + response[n].name +'</p><p>' + response[n].description + '</p></a></li>');
    // console.log(response);  
  }).fail(function(error){
  
  });
};


exports.userModule = User;


},{"./../.env":1}],3:[function(require,module,exports){
var User =  require('./../js/user.js').userModule;



$(document).ready(function () {
	
	var currentUserObject = new User();
	$('#searchUser').click(function (e) {
		e.preventDefault();
		var githubuser = $('#github-username').val();
		$('#github-username').val("");
		// $('.username').text(githubuser);
		currentUserObject.getUser(githubuser);
	});
});









},{"./../js/user.js":2}]},{},[3]);
