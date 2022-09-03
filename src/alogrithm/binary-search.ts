
/**
 * 二分查找（循环）
 * @param arr 
 * @param target 
 * @returns 
 */

export const binarySearch1 = (arr: number[], target: number): number => {
    const len = arr.length;
    if (!len) return -1;

    let startIndex = 0;
    let endIndex = len - 1;

    while (startIndex <= endIndex) {
        // 找中间索引
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        const midValue = arr[midIndex];

        if (target < midValue) {
            // 目标值较小，在左侧
            //左侧索引不变，右侧变成中间索引减一
            endIndex = midIndex - 1;
        } else if (target > midValue) {
            // 目标值较大，在右侧
            // 右侧结束索引不变，左侧索引变成中间索引加一
            startIndex = midIndex + 1;
        } else {
            // 中间值等于目标值，返回中间索引
            return midIndex;
        }
    }
    // 没找到，返回-1
    return -1;
}


/**
 * 二分查找（递归）
 * @param arr 
 * @param target 
 * @param startIndex 
 * @param endIndex 
 * @returns 
 */
export const binarySearch2 = (arr: number[], target: number, startIndex?: number, endIndex?: number): number => {
    const len = arr.length;
    if (!len) return -1;

    // 首次进来，设置初始值
    if (!startIndex) startIndex = 0;
    if (!endIndex) endIndex = len - 1;

    // 当起始索引大于结束索引，则证明没找到，返回-1
    if (startIndex > endIndex) return -1;

    // 否则，执行
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midValue = arr[midIndex];

    if (target < midValue) {
        // 目标值偏小，结束索引换成中间索引减一
        // 递归这个函数
        return binarySearch2(arr, target, startIndex, midIndex - 1)
    } else if (target > midValue) {
        // 目标值偏大，开始索引换成中间索引加一
        // 递归这个函数
        return binarySearch2(arr, target, midIndex + 1, endIndex)
    } else {
        // 目标值等于中间值，返回中间索引
        return midIndex;
    }
}

// // 功能测试
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
// const target = 40
// // console.info(binarySearch2(arr, target))

// // 性能测试
// console.time('binarySearch1')
// for (let i = 0; i < 100 * 10000; i++) {
//     binarySearch1(arr, target)
// }
// console.timeEnd('binarySearch1') // 15ms
// console.time('binarySearch2')
// for (let i = 0; i < 100 * 10000; i++) {
//     binarySearch2(arr, target)
// }
// console.timeEnd('binarySearch2') // 29ms