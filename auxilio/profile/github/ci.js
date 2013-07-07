function ci(args, callback) {
	var message = args.join(" ");
	exec('git add .', function() {
		exec('git commit -am "' + message + '"', callback);
	});
}