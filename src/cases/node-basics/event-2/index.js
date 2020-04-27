/*
	
请编写一个异步函数, 这个函数会传入一个emitter

请让这个emitter监听多个事件

* data: (string) => void
* end: () => void

当emitter接收到end事件时, 请将之前接收到的data数组按顺序返回(resolve)


*/


module.exports = async (emitter) => {

    emitter.on('data', (strData) => {
        if (this.arrayStr == undefined) {
            this.arrayStr = [strData];
        } else {
            this.arrayStr.push(strData);
        }
    });

    return new Promise((resolve, reject) => {

        emitter.on('end', () => {
            if (this.arrayStr.length > 0) {
                resolve(this.arrayStr);
            } else {
                reject(undefined);
            }
        });
    });

};
