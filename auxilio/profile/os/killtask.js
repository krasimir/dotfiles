function killtask(args, callback) {
	var id = args.shift();
	exec("taskkill /PID " + id + " /F", callback);
}