/**
 * 查询 1-max 的所有对称数（数组反转）
 * @param max 
 * @returns 
 */
export const findPalindromeNumbers1 = (max: number): number[] => {
    const res: number[] = []
    if (max <= 0) return res;

    for (let i = 1; i <= max; i++) {
        // 转换为字符串，转换成数组，翻转，再粘合为字符串
        const s = i.toString();
        if (s === s.split('').reverse().join('')) {
            res.push(i);
        }
    }
    return res;
}

/**
 * 查询 1-max 的所有对称数（字符串前后比较）
 * @param max 
 * @returns 
 */
export const findPalindromeNumbers2 = (max: number): number[] => {
    const res: number[] = [];
    if (max <= 0) return [];

    for (let i = 1; i <= max; i++) {
        const s = i.toString();
        let startIndex = 0;
        let endIndex = s.length - 1;

        let flag = true;
        while (startIndex < endIndex) {
            if (s[startIndex] !== s[endIndex]) {
                // 比较终止
                flag = false;
                break;
            } else {
                // 继续比较
                startIndex++;
                endIndex--;
            }
        }
        if (flag) {
            res.push(i)
        }
    }
    return res;
}

/**
 * 查询 1-max 的所有对称数（翻转数字）
 * @param max 
 * @returns 
 */
export const findPalindromeNumbers3 = (max: number): number[] => {
    const res: number[] = [];
    if (max <= 0) return res;

    for (let i = 1; i <= max; i++) {
        let n = i;
        let rev = 0;
        while (n > 0) {
            rev = rev * 10 + n % 10; // 将n的个位数拼到自己后面
            n = Math.floor(n / 10) // 去掉自己的个位数
        }
        if (i === rev) {
            res.push(i)
        }
    }
    return res;
}

/**
 * @description 翻转数字方法
 * rev一开始是0，然后每次都变大10倍，然后加上n的个位数
 * n每次都去掉个位数
*/
const getReverseNumber = (n: number): number => {
    let normalNum = n;
    let rev = 0;
    // n = 123 rev=0;
    // n = Math.floor(123 / 10) = 12, 去掉个位数； rev = 0*10 + 123%10 = 3，自己变大10倍，再加上n的个位数，其实就是自己加n的个位数
    // n = Math.floor(12 / 10) = 1, 去掉个位数，这个个位数2又加到了rev后面，方法还是rev*10 + 2 = 32
    // n = Math.floor(1 / 10) = 0, 去掉个位数，依然加在rev后面变成321
    while (normalNum > 0) {
        rev = rev * 10 + normalNum % 10;
        normalNum = Math.floor(normalNum / 10)
    }
    return rev;
}

// 功能测试

// const arr = findPalindromeNumbers3(200)
// console.log(arr);

// 性能测试
// console.time('findPalindromeNumbers1')
// findPalindromeNumbers1(100 * 10000)
// console.timeEnd('findPalindromeNumbers1') // 316ms

// console.time('findPalindromeNumbers2')
// findPalindromeNumbers2(100 * 10000)
// console.timeEnd('findPalindromeNumbers2') // 41ms

// console.time('findPalindromeNumbers3')
// findPalindromeNumbers3(100 * 10000)
// console.timeEnd('findPalindromeNumbers3') // 38ms