function newBlogPost(args) {
	var blogTitle = args.join(" ");
	var dir = blogTitle.replace(/ /g, "");
	exec("cd D:/work/KrasimirTsonev/github/blog-posts/blog-posts", function() {
		exec("mkdir " + dir, function() {
			exec("cd " + dir, function() {
				exec("shell echo " + blogTitle + " > post.md", function() {
					exec("post.md");
				});
			})
		});
	});
}