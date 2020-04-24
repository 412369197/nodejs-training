/*
	
编写一段逻辑，读取Map m中的所有value
Map m的key皆为number
Map m的value皆为string，格式如'Qtrv Nutesxgya Gblpmjv Yjwiti Xiosjw', 只会包含字母及空格, 该value的有五个单词

请统计Map m中所有value中的单词数目总和
并将该总和的值通过key "__total__" 填入Map m中

最后返回原Map m

*/


/**
 * @param m {Map<any, string>}
 */
module.exports = function mapReadWrite(m) {

  const iterator1 = m.values();
  let total = 0;
  let result = iterator1.next();
  while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    let arryWords = result.value.split(' ');
    total += arryWords.length;
    result = iterator1.next();
  }

  m.set('__total__', total);

  return m;
};
