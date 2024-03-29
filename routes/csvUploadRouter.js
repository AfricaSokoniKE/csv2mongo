const express = require('express'),
	router = express.Router(),
	uuidv1 = require('uuid/v1');

let csvUploadService;

function setCSVUploadService (_csvUploadService) {
	csvUploadService = _csvUploadService;
}

router.post('/upload', (req, res) => {
	console.log("upload");

	let batchId = uuidv1();
	csvUploadService.uploadCSV(req.body.fileName, req.body.fileBuffer, batchId);

	res.status(200).send({
		batchId: batchId
	});
});

module.exports = {
	router: router,
	setCSVUploadService: setCSVUploadService
};
