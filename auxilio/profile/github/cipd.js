function commitAndPushToMaster(args, callback) {
	Chain()("done", callback)(
		[ci, args.join(" ")],
		[push, "develop"]
	);
}