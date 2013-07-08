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

	/*chain([
		["block", "start"],
		["cd", "D:/work/KrasimirTsonev/github/dotfiles"],
		["ci", "Updating dotfiles"],
		["push", "master"],
		["block", "end"]
	], callback)*/
	
}