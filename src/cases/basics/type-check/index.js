/*
	
check the input parameter type

input   output

1       'number'
'2'     'string'
null    'null'
NaN     'NaN'
[]      'array'
{}      'object'

*/


module.exports = (v1) => {
    // const t = typeof v1;
    // if (t == 'number' || t == 'string') {
    //     return t;
    // }
    const t = typeof v1;
    if (t == 'number') {
        if (isNaN(v1)) {
            return 'NaN';
        }
    } else if (t == 'object') {
        if (v1 == null) {
            return 'null';
        } else if (v1 instanceof Array) {
            return 'array';
        }

    }

    return t;



};
