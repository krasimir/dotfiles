function stopMongoDB(args) {
	exec('taskkill /F /IM mongo*');
}