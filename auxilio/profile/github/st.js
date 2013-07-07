function status(args, callback) {
	exec('git status -sb', callback);
}