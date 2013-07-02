function showMongoDB(args) {
	exec("wmic path win32_process get Commandline,Processid | grep mongo");
}