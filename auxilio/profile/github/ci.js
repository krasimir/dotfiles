function ci(args) {
	var message = args.join(" ");
	exec('git add .', function() {
		exec('git commit -am "' + message + '"');
	});
}