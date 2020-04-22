/*
	
is less than

input       output

1,2         true
'1','2'     true
'1','1'     false
'1',-1      false

*/


/**
 * @param v1 {number|string}
 * @param v2 {number|string}
 */
module.exports = (v1, v2) => {
    let lv1 = parseInt(v1);
    let lv2 = parseInt(v2);
    return lv1 < lv2;
};
