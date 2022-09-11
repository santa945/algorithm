/**
 * 千分位格式化（使用数组）
 * @param n number
 */

export const format1 = (n: number): string => {
    n = Math.floor(n) // 只考虑整数

    const s = n.toString()
    const arr = s.split('').reverse()
    return arr.reduce((prev, val, index) => {
        if (index % 3 === 0) {
            if (prev) {
                return val + ',' + prev; // 这种上一个值放后面，就是反转回来
            } else {
                return val + prev;
            }
        } else {
            return val + prev
        }
    }, '')
}


export const format2 = (n: number): string => {
    n = Math.floor(n);

    let res = '';
    const s = n.toString();
    const len = s.length;
    // 倒过来遍历，i从后面循环到前面，从length-1循环到0
    for (let i = len - 1; i >= 0; i--) {
        // 为什么不是j = len，而是len-i，因为j不是拿来当索引的，而是拿来计数的，所以是1开始算
        // 例如s=‘12345’，i一开始是5-1=4，j是5-4=1，不用加‘,’
        // 第二次，i是3，j是5-3=2，不用加‘,’
        // 第三次，i是2，j是5-2=3，此时i还不是0，循环没结束，加‘,’
        // 第四次，i是1，j是5-1=4，不用加‘,’
        // 以此类推，j是拿来计数的，不需要知道arr[j],所以从1开始
        const j = len - i;
        if (j % 3 === 0) {
            if (i === 0) {
                // 遍历结束了，
                res = s[i] + res; // 这种写法也是从后往前加
            } else {
                res = ',' + s[i] + res
            }
        } else {
            res = s[i] + res;
        }
    }
    return res;
}

// 功能测试
const n = 12345678900
console.info('format2', format2(n))
// console.info('format2', format2(n))
