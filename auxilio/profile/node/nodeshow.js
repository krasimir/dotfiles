function shownodes(args, callback) {
	exec("wmic path win32_process get Commandline,Processid | grep node", callback);
}