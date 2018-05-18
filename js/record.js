const fs = require('fs');
const record = require('node-record-lpcm16');

// Used to name the recording file.
var fileName = "record_";
var fileNumber = 0;
var fileExtension = ".wav"

// Show a message.
function showMessage()
{
	document.getElementById("message").innerHTML = "I'm listening... 🦇";
	return ;
}

// Reset a message.
function resetMessage()
{
	document.getElementById("message").innerHTML = "";
	return ;
}

// Check if the filename exists.
function newFilePath() {
	while (1) {
		// Join the strings to make the filename.
		var filePath = fileName + fileNumber + fileExtension;

		// Maybe we can refactor this part... guys, help?
		if (fs.existsSync(filePath))
			fileNumber++;
		else
			break;
	}
	return (filePath);
}

// Start recording.
function startRecord() {
	var filePath = newFilePath();
	var fileRecord = fs.createWriteStream(filePath, { encoding: 'binary' });
	record.start({ sampleRate: 16000, verbose: true }).pipe(fileRecord).on('close', resetMessage);
	return ;
}
