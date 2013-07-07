function updateAuxilioManuals(args, callback) {
	block("start", function() {
		exec("cd D:/work/KrasimirTsonev/github/auxilio", function() {
			exec("man exporttomarkdown", function() {
				ci("Update manuals", function() {
					push("master", function() {
						block("end", callback);
					})					
				})
			})
		});
	})
	
}