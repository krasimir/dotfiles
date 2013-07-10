function ci(args, callback) {
	var message = args.join(" ");
	Chain()("done", callback)(
		[shell, 'git add .'],
		[shell, 'git commit -am "' + message + '"']
	);
}