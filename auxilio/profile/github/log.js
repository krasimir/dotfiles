function gitlog(args, callback) {
	exec('git log -15 --format="%Cgreen%cn / %s%n%ai / %h"', callback);
}