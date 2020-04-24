/*
	
s是一个字符串

正常情况下 s的格式为 ID-NAME[USERNAME]:{DATE} (字符串不会含有空格换行符等)
例如 1-Alice,[ALICE1]:{20202020}

异常情况下 s的格式任意

请将字符串结构化并返回一个object
其中包含属性
id: number 无需前缀0
name: string
username: string 
date: string

例如
return {
    id: 1,
    name: "Alice",
    username: "ALICE1",
    date: "20202020"
}

异常情况下，各字段请设置为null，并依然返回object

*/


/**
 * @param s {string}
 * @returns {{id:number,name:string,username:string,date:string}}
 */
module.exports = function parse(s = '') {

    let regexp = /(.*)-(.*),\[(.*)\]:(.*)/g;
    let result = {};
    // let str = '47634-sspgfslmk,[SSPGFSLMK47634]:20140608';
    let array = [...s.matchAll(regexp)];
    // console.log(array[0]);

    if (array.length == 1) {
        result.id = parseInt(array[0][1]);
        result.name = array[0][2];
        result.username = array[0][3];
        result.date = array[0][4] + '';
    } else {
        result.id = null;
        result.name = null;
        result.username = null;
        result.date = null;
    }

    return result;
};
