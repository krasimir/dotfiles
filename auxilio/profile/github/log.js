function gitlog(args) {
	exec('git log -15 --format="%Cgreen%cn / %s%n%ai / %h"');
}