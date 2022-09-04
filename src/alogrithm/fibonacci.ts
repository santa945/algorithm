/**
 * @description 传入一个数字n，返回斐波那契数列的第n位
 * @description 斐摸那契数列，每一项等于前两项之和[0,1,1,2,3,5,8,13,21,34,55.....]
 */

/**
 * 斐波那契数列（递归）O(2^n)
 * @param n 入参为需要找到第几位
 * @returns 返回数列第n位的数字
 */

export const fibonacci1 = (n: number): number => {
    // 如果要求第一项，返回0
    if (n <= 0) return 0;
    // 求第二项，返回1
    if (n === 1) return 1;

    // 当n大于2时，则需要开始进入递归
    // 求第n项，则等于n-1项加上n-2项之和
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}

/**
 * 斐波那契数列（循环）O(n)
 * @param n 
 * @returns 
 */

export const fibonacci2 = (n: number): number => {
    // 如果要求第0项，返回0
    if (n <= 0) return 0;
    // 如果要求第1项，返回1
    if (n === 1) return 1;

    // 当n大于1时，则需要开始进入循环
    // 使用双指针，记录自己前面两项
    let n1 = 1; // 上一个数字；初始值为1，即斐波那契数列第二项
    let n2 = 0; // 上两个数字；初始值为0，即斐波那契数列第一项
    let res = 1 // 初始值为1，因为n等于2是，是第0项加第1项，即0+1=1;

    // n为2，循环1次，只做(0+1)；n为3时，循环2次，做1+1，其中第二个1为0+1之和
    // 所以只循环n-2次，第0项和第1项不需要循环
    for (let i = 2; i <= n; i++) {
        // 每次循环，将前面两项之和为自己的值，如果n等于2，则就是初始值0+1
        res = n1 + n2
        // console.log('----查看循环打印结果------------------');
        // console.log('res', res);
        // console.log('n1', n1);
        // console.log('n2', n2);

        // 设置res完毕，此时指针后移，这时n1和n2为中间结果，如果还有机会进来这个循环，才能用这两个数值计算新值
        n1 = res; // 如果还有机会进来这个循环，那现在的res就是下次循环的前1项数据
        n2 = n1; // 如果还有机会进来这个循环，那现在的n1就是下次循环的前2项数据
        // 如果没进来这个循环，n1和n2也不是正确的指针，只不过不需要再用到了
    }
    return res;
}

// 功能测试
// console.log(fibonacci2(4))

// 性能测试
// console.time('fibonacci1')
// // 别写太大，递归是O(2^n)复杂度，性能很差，页面会卡死
// console.log(fibonacci1(35)); // 120ms
// console.timeEnd('fibonacci1')

// console.time('fibonacci2')
// console.log(fibonacci2(35)); // 0.11ms
// console.timeEnd('fibonacci2')