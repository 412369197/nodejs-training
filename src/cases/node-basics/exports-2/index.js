/*
	
请访问'exports-1'模块, 并export 'exports-1'模块中的addr

*/

const export1 = require('../exports-1');
module.exports = { addr: export1.addr };
