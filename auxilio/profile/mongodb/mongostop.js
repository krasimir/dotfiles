function stopMongoDB(args, callback) {
	exec('taskkill /F /IM mongo*', callback);
}