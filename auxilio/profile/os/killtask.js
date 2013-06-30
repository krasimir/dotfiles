function killtask(args) {
	var id = args.shift();
	exec("taskkill /PID " + id + " /F");
}