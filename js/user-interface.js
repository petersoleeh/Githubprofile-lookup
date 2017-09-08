var User =  require('./../js/user.js').userModule;



$(document).ready(function () {
	
	var currentUserObject = new User();
	$('#searchUser').click(function (e) {
		e.preventDefault();
		var githubuser = $('#github-username').val();
		$('#github-username').val("");
		currentUserObject.getUser(githubuser)
	});
});