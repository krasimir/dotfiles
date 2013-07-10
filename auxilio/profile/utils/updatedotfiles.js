function updateAuxilioManuals(args, callback) {
	Chain()("done", callback)(
		function(res, chain) {
			block("start", chain.next);
		},
		function(res, chain) {
			exec("cd D:/work/KrasimirTsonev/github/dotfiles", chain.next);
		},
		function(res, chain) {
			ci("Updating dotfiles", chain.next);
		},
		function(res, chain) {
			push("master", chain.next);
		},
		function(res, chain) {
			block("end", chain.next);
		}
	)
}