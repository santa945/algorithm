/**
 * 寻找两数之和（嵌套循环）O(n^2)
 * @param arr 传入的数组
 * @param target 找出两个数字加起来等于target
 * @returns 
 */
export const findTwoNumberSum1 = (arr: number[], target: number): number[] => {
    const res: number[] = [];

    const len = arr.length;
    if (!len) return res;

    // 第一层循环不需要到最后一个，到倒数第二个就可以了，所以小于len-1
    for (let i = 0; i < len - 1; i++) {
        // 第一层循环是先确定第一个数字n1
        const n1 = arr[i];
        let flag = false // 优化：找到了，就跳出循环

        // 第二层循环需要到最后一个，所以是小于len-1，但是需要从第一个数值的下一个开始找，例如第一个是索引0，则从索引0+1开始找
        for (let j = i + 1; j < len; j++) {

            // 确定第二个数字n2， n2的索引是n1索引的下一个开始，即i+1;
            const n2 = arr[j];

            if (n1 + n2 === target) {
                res.push(n1)
                res.push(n2)
                flag = true //优化：找到了，标记，退出
                break;
            }

        }
        if (flag) break; // 优化：找到了就退出

    }

    return res;
}

/**
 * 寻找两数之和（双指针）O(n)
 * @param arr 
 * @param target 
 * @returns 
 */
export const findTwoNumberSum2 = (arr: number[], target: number): number[] => {
    const res: number[] = [];

    const len = arr.length;
    if (!len) return res;

    // 定义两个指针
    let i = 0;
    let j = len - 1;

    // 只要两个指针还没相等或交叉，则进入循环
    while (i < j) {
        const n1 = arr[i]
        const n2 = arr[j]
        const sum = n1 + n2

        if (sum > target) {
            // 如果头和尾的值相加大于目标值，则证明太大了，尾部往里移动
            j--
        } else if (sum < target) {
            // 如果头和尾的值相加小于目标值，则证明太小了，头部往里移动
            i++
        } else {
            // 两者相加等于目标值
            res.push(n1)
            res.push(n2)
            break;
        }
    }
    return res;
}


// 功能测试
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 30]
console.info(findTwoNumberSum2(arr, 27))

// 性能测试
console.time('findTwoNumberSum1')
for (let i = 0; i < 100 * 10000; i++) {
    findTwoNumberSum1(arr, 27)
}
console.timeEnd('findTwoNumberSum1') // 116ms

console.time('findTwoNumberSum2')
for (let i = 0; i < 100 * 10000; i++) {
    findTwoNumberSum2(arr, 27)
}
console.timeEnd('findTwoNumberSum2') // 41ms