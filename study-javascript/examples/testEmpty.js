var array = [ '导购app,陈巍,,,', ',,,,' ];

array.forEach(function (item) {
	if (!isEmpty(item)) {
		console.log(item);
	}
});

// function isEmpty(content) {
// 	var parts = content.split(',');
// 	parts.forEach(function (part) {
// 		console.log('---');
// 		console.log(part);
// 		console.log(part === '');
// 		if (part === '') {
// 			return true;
// 		}
// 	});
// 	return false;
// }
//


function isEmpty(content) {
	var parts = content.split(',');
	for (var key in parts) {
		if (parts[key] === '') {
			return true;
		}
	}
	return false;
}
