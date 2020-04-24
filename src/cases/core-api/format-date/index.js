/*
	
使用给定格式对日期进行格式化

d是一个Date对象, f是一个字符串
f中可能包含的占位符:

yyyy, year
MM, month, 1,2,3,4, .... 12
dd, day of month, 1 .... 30 (31)

例如:
const d = new Date("2020-01-01")
const f = 'dd-dd-dd-yyyy'

formatDate(d, f) // 01-01-01-2020

please ref: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date


*/


/**
 * @param d {Date}
 * @param f {string}
 * @returns {string}
 */
module.exports = function formatDate(d, f) {
    let result = f;
    // let result = 'yyyy[yyyy]MM/dd';
    // let d = new Date('2020-01-06T01:31:44.259Z');
    let year = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    console.log('the result is:' + result);
    console.log('the year is : ' + year);
    result = result.replace(/yyyy*/g, year);
    result = result.replace('MM', mm);
    result = result.replace('dd', dd);
    console.log(result);
    return result;
};
