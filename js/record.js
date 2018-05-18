const fs = require('fs');
const record = require('node-record-lpcm16');

// Used to name the recording file.
var fileName = "record_";
var fileNumber = 0;
var fileExtension = ".wav"

// Check if the filename exists.
function newFile() {
	while (1) {
		// Join the strings to make the filename.
		var file = fileName + fileNumber + fileExtension;

		// Maybe we can refactor this part... guys, help?
		if (fs.existsSync(file))
			fileNumber++;
		else
			break;
	}
	return (file);
}

// Start recording.
function startRecord() {
	var file = newFile();
	var fileRecord = fs.createWriteStream(file, { encoding: 'binary' });
	record.start({ sampleRate: 16000, verbose: true }).pipe(fileRecord);
	return ;
}

startRecord();
