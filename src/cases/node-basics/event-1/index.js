/*
	
请编写并返回一个EventEmitter instance

该emitter需要响应wow事件, 并将第一个参数传入cb中

例如
emitter.emit("wow", "123123") // => exec cb("123123")


*/


module.exports = (cb) => {

    const { EventEmitter } = require('events');
    const Service = class extends EventEmitter {
        constructor(...args) {
            super(...args);
        }
    };

    const bus = new Service();

    bus.on('wow', (arg1) => {
        cb(arg1);
    });


    return bus;
};
