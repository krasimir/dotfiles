function gitpull(args) {
	var branch = args.length > 0 ? args.shift() : false;
	var remote = args.length > 0 ? args.shift() : 'origin';
	if(!branch) {
		exec('error Missing branch.');
	} else {
		exec('git pull ' + remote + ' ' + branch);
	}
}