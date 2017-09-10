var User =  require('./../js/user.js').userModule;



$(document).ready(function () {
	
	var currentUserObject = new User();
	$('#searchUser').click(function (event) {
		event.preventDefault();
		var githubuser = $('#github-username').val();
		$('#github-username').val("");
		$('#repo').html("");
		$('#error').html("");
		$('.username').html("");
		// $('.username').text(githubuser);
		currentUserObject.getUser(githubuser);
	});
});








