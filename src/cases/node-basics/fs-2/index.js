/*
	
请读取系统临时路径下的fs-2-test-file.json文件, 其文件内容必然为JSON格式文本, 格式如下

{
    "host": "a.b.c",
    "port": 22233
}

请返回一个字符串, 格式为
今天练习fs-2中，返回字符串格式为host:port
可能使用到的API:
require或者fs
JSON.parse


*/


const fsPromises = require('fs').promises;
const path = require('path');
const os = require('os');

module.exports = async () => {
    const fileData = await fsPromises.readFile(path.join(os.tmpdir(), '/fs-2-test-file.json'));
    const jsonData = JSON.parse(fileData);
    return `${jsonData.host}:${jsonData.port}`;
};
