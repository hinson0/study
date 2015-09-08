var b = 4 && 5 && null && 0; 
console.log(b); // null

/**
 * 分析
 *
 * var b = true && true && false && false; 找到第三个值:false，那么第三个值对应的是null
 */
