const fs = require('fs');
const record = require('node-record-lpcm16');

var filename = "record.wav";

function startRecord() {
	var file = fs.createWriteStream(filename, { encoding: 'binary' });
	record.start({ sampleRate: 16000, verbose: true }).pipe(file);
}

// startRecord();
