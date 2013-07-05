function shownodes(args) {
	exec("wmic path win32_process get Commandline,Processid | grep node");
}