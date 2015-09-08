'use strict';

// var fs = require('fs');
// 
// fs.readFile('1.txt', 'utf-8', function (err, data) {
// 	if (err) {
// 		console.error(err);
// 		return;
// 	}
// 	console.log(data);
// });

// var q = require('q');
// var fs = require('fs');
// var readFile = q.denodeify(fs.readFile);
// 
// var promise = readFile('1.txt', 'utf-8');
// promise
// 	.then(function (data) {
// 		console.log(data);
// 	}, function (err) {
// 		console.log(err);
// 	});
// 

// var q = require('q');
// var fs = require('fs');
// var fsReadFile = q.nfcall(fs.readFile, '1.txt', 'utf-8');
// 
// fsReadFile
// 	.then(function (data) {
// 		console.log(data);
// 	}, function (error) {
// 		console.log(error);
// 	});

// var q = require('q');
// var fs = require('fs');
// var fsReadFileDefeered = function (file, encoding) {
// 	var deferred = q.defer();
// 	fs.readFile(file, encoding, function (error, result) {
// 		if (error) {
// 			deferred.reject(error);
// 		}
// 		deferred.resolve(result);
// 	});
// 	return deferred.promise;
// }
// 
// fsReadFileDefeered('1.txt', 'utf-8')
// 	.then(function (result) {
// 		console.log(result);
// 	}, function (error) {
// 		console.log(error);
// 	});


var q = require('q');
var fs = require('fs');

// fs.readFile('1.txt', 'utf-8', function (err, data1) {
// 	if (err) {
// 		throw err;
// 	}
// 	fs.readFile('2.txt', 'utf-8', function (err, data2) {
// 		if (err) {
// 			throw err;
// 		}
// 		console.log(data1);
// 		console.log(data2);
// 	});
// });

q.nfcall(fs.readFile, '1.txt', 'utf-8')
	.then(function (data1) {
		// console.log(data1);
		return q.nfcall(fs.readFile, '2.txt', 'utf-8');
	})
	.then(function (data2) {
		// console.log(data2);
		return q.nfcall(fs.readFile, '3.txt', 'utf-8');
	})
	.then(function (data3) {
		console.log(data3);
	});
