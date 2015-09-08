

// function eachSeries(array, iterator, callback) {
// 	if (array.lenth === 0) {
// 		return callback(null);
// 	}
// 	var key = 0;
// 	var iterate = function () {
// 		iterator(array[key], function (err, data) {
// 			if (err) {
// 				return callback(err);
// 			}
// 			key += 1;
// 			if (key >= array.length) {
// 				return callback();
// 			}
// 			iterate();
// 		});	
// 	}
// 	iterate();
// }
// 
// eachSeries(['file1', 'file2', 'file3'], function (item, cb) {
// 	if (item === 'file2') {
// 		cb('err message');
// 	} else {
// 		cb(null);
// 	}
// }, function (err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('okay');
// 	}
// }) 


function each(array, iterator, callback) {
	if (array.length === 0) {
		return callback();
	}
	var key = 0;
	array.forEach(function (item, key) {
		iterator(item, done);
	});
	function done(err) {
		if (err) {
			return callback(err);
		}
		key += 1;
		if (key >= array.length) {
			return callback();
		}
	}
}

// each(['file1', 'file2', 'file3'], function (item, cb) {
// 	if (item === 'file4') {
// 		cb('err message');
// 	} else {
// 		cb(null);
// 	}
// }, function (err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('okay');
// 	}
// }); i


function slice(obj, start) {
	var results = [];
	var end = obj.length - 1;
	for (var i = 0; i < end; i++) {
		results[i] = obj[i + start];
	}
	return results;
}

function parallel(tasks, callback) {	
	callback = callback || function () {};
	var results = [];
	if (tasks.length === 0) {
		return callback(null, results);
	}
	each(tasks, function (task, cb) {
		task(function (err) {
			var args = slice(arguments, 1);
 			if (args.length <= 1) {
 				results.push(args[0]);
 			} else {
 				results.push(args);
 			}
			cb(err);
		});
	}, function (err) {
		callback(err, results);
	});
}

parallel([
	function (cb) {
		cb(null, {hello: 1}, {xxx: 3333});
	},		
	function (cb) {
		// cb('errer message');
		cb('errr');
	},		
	function (cb) {
		cb(null, {hellox: 22});
	},		
], function (err, results) {
		console.log(err);
		console.log(results);
});


