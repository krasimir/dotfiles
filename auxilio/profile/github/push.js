function gitpush(args, callback) {
	var branch = args.length > 0 ? args.shift() : false;
	var remote = args.length > 0 ? args.shift() : 'origin';
	if(!branch) {
		exec('error Missing branch.', callback);
	} else {
		exec('git push ' + remote + ' ' + branch, callback);
	}
}