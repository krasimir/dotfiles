function gitlog(args, callback) {
	var numberOfCommits = args.length > 0 ? parseInt(args[0]) : 10;
	shell('git log -' + numberOfCommits + ' --name-status --format="%n------------------------------------ %s%n%cn%n%ai / %h"', callback);
}