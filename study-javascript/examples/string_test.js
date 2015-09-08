var a = {
	data: {
		service: 'service_ndim',
		method: 'send',
		params: [
			"任务[根据二次评审会议中提到的几点：1 加入字段白名单 2 混淆后的ID加入前缀]杨志兵已完成。作为同一故事下的相关人员，你会收到此消息",
			[110932]
		]
	},
	pack_type: 'raw'
};
var json = JSON.stringify(a);
console.log(json.length);

var buf = new Buffer(json);
console.log(buf);
console.log(buf.length);
