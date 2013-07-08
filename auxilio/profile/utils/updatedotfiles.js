function updateAuxilioManuals(args, callback) {
	Chain.on("done", callback).run(
		function(res, next) {
			block("start", next);
		},
		function(res, next) {
			exec("cd D:/work/KrasimirTsonev/github/dotfiles", next);
		},
		function(res, next) {
			ci("Updating dotfiles", next);
		},
		function(res, next) {
			push("master", next);
		},
		function(res, next) {
			block("end", next);
		}
	)
}