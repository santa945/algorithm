/**
 * 0.1+0.2 = 0.3000000000004
 */
const bool1: boolean = 0.1 + 0.2 === 0.3;


/**
 * 0.849*100 = 84.89999999999999
 */
const bool2: boolean = 0.849 * 100 === 84.9;

/**
 * 2.445四舍五入保留两位小数失败
 * @description 四舍六入五成双
 */
const bool3: boolean = 2.445.toFixed(2) === '2.45';
const bool4: boolean = 2.446.toFixed(2) === '2.45';

console.log('0.1+0.2 =>', 0.1 + 0.2);
console.log('0.849*100  =>', 0.849 * 100);
console.log('2.445.toFixed(2) =>', 2.445.toFixed(2));
console.log('2.446.toFixed(2) =>', 2.446.toFixed(2));

// 实际上是转换为二进制的原因，最后的解决方式是使用第三方库
// 官网：https://mikemcl.github.io/bignumber.js/#bignumber
// cdn地址：https://cdn.bootcdn.net/ajax/libs/bignumber.js/9.1.0/bignumber.js
// 本地：src/lib/bignumber.js

console.log('-----使用第三方库-bignumber----------');

const BigNumber = require('./../lib/bignumber.js');

const num1 = new BigNumber(0.1)
const sum = num1.plus(0.2)
console.log('bigNumber-0.1+0.2=>', sum.toNumber());

const num2 = new BigNumber(0.849)
const mulNum = num2.multipliedBy(100)
console.log('bigNumber-0.849*100', mulNum.toNumber());

const num3 = new BigNumber(2.445)
const toFixedNum = num3.toFixed(2)

console.log('bigNumber-2.445.toFixed(2)=>', toFixedNum);

