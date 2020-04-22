/*
	
sum array items' value, array length <= 100, -10000 < item value < 10000

input       output

[]          0
[1,2,3]     6
[1,99]      100
[-23,23]    0

*/


module.exports = (arr = []) => {
    // let total;
    // arr.forEach(function (val) {
    //     total = total + val;
    // });
    // return total;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};
