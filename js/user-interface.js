var User =  require('./../js/user.js').userModule;



$(document).ready(function () {
	
	var currentUserObject = new User();
	$('#searchUser').click(function (event) {
		event.preventDefault();
		var githubuser = $('#github-username').val();
		$('#github-username').val("");
		$('#repo').empty("");
		$('#error').empty("");
		$('.username').empty("");
		// $('.username').text(githubuser);
		currentUserObject.getUser(githubuser);
	});
});








