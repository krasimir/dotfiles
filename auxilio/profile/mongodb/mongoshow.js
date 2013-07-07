function showMongoDB(args, callback) {
	exec("wmic path win32_process get Commandline,Processid | grep mongo", callback);
}