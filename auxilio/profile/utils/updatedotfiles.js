function updateAuxilioManuals(args, callback) {
	block("start", function() {
		exec("cd D:/work/KrasimirTsonev/github/dotfiles", function() {
			ci("Updating dotfiles", function() {
				push("master", function() {
					block("end", callback);
				})					
			})
		});
	})
	
}