function checkMongoDB(args) {
	exec('block start');
	exec('cd C:');
	exec('cd C:\\Program Files (x86)\\mongodb\\bin');
	exec('mongo.exe');
	exec('block end');
}