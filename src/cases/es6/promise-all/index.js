/*
	
f1是一个函数, 有一个参数, 执行后会返回Promise
arr是一个字符串数组, 包含任意多(10<length<100)字符串
请将arr中的每一个字符串传入f1中, 并等待所有promise结束后返回
cb是回调函数, 请将结果(数组)(按照顺序)作为第一个参数传入cb

*/


module.exports = (f1, arr, cb) => {
    Promise.all(arr.forEach(element => {
        f1(element);
    })).then((resolved) => cb(resolved));

};
