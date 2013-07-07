function startMongoDB(args, callback) {
	exec('block start');
	exec('cd C:');
	exec('cd C:\\Program Files (x86)\\mongodb\\bin');
	exec('mongod.exe --dbpath D:\\work\\_mongodb\\data');
	exec('block end', callback);
}