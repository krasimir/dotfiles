function UpdateBlogPosts(args, callback) {
	var commitMessage = args.join(" ");
	if(commitMessage && commitMessage != '') {
		Chain()("done", callback)(
			[block, "start"],
			[cd, "D:/work/KrasimirTsonev/github/blog-posts/blog-posts"],
			[ci, commitMessage],
			[push, "master"],
			[block, "end"]
		)
	} else {
		error("Please type a commit message");
	}
}