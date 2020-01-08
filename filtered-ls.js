let fs = require('fs');
const path = require('path');
let file = process.argv[2];
let ext = '.' + process.argv[3];
fs.readdir(file,function (err,input) {
	if(err) {
		console.log(err);
	}
	else {
		input.forEach(filename => {
			if (path.extname(filename) === ext) {
				console.log(filename);
			}
		});
	}
});

