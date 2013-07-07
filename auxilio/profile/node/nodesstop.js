function stopMongoDB(args, callback) {
	exec('taskkill /F /IM node*', callback);
}