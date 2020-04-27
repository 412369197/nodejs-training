/*
	
请编写一个函数, 动态的将src/cases/core-api中的所有modules加载到一个数组中并返回

可能使用到的API

https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fspromises_readdir_path_options

以及path.join


*/
// const fsPromises = require('fs').promises;
// const path = require('path');

module.exports = async () => {

    const fsPromises = require('fs').promises;
    const path = require('path');

    let apiFolderPath = path.join(__dirname, '../../core-api');
    const folders = await fsPromises.readdir(apiFolderPath);

    return folders.map(folder => {
        require(path.join(apiFolderPath, folder));
    });

};
