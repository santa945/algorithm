/**
 * 移动数组中的0到数组末尾（嵌套循环）O(n^2)
 * @param arr 
 * @returns 改变原数组，无返回
 */

export const moveZero1 = (arr: number[]): void => {
    const len = arr.length;
    if (!len) return;

    let zeroLength = 0;
    for (let i = 0; i < len - zeroLength; i++) {
        if (arr[i] === 0) {
            // 找到0，往后push
            arr.push(0);
            // 挖掉当前的0
            arr.splice(i, 1);
            i--; // 因为挖掉了一个0，所以索引还是要从自己开始
            zeroLength++;// 被退到数组后的0长度越来越长，到最后不需要遍历到它
        }
    }
}


export const moveZero2 = (arr: number[]): void => {
    const len = arr.length;
    if (!len) return;
    let i;
    let j = -1 // 指向第一个0

    for (let i = 0; i < len; i++) {
        // console.log('arr', JSON.parse(JSON.stringify(arr)));
        // console.log('i', i, 'arr[i]', arr[i]);
        // console.log('j', j, 'arr[j]', arr[j]);
        // 初始化j的值，此时j是第一个0的索引
        if (arr[i] === 0 && j < 0) {
            j = i;
        }

        if (arr[i] !== 0 && j >= 0) {
            // j已经初始化过了，而且当前的值不是0，要交换
            const n = arr[i]
            arr[i] = arr[j]
            arr[j] = n;

            //j往后移动
            j++
        }
    }
}

// 功能测试
// const arr = [1, 0, 0, 2, 0, 3, 4, 5, 0, 0, 6, 0, 7]
// moveZero2(arr)
// console.log(arr);

// // 性能测试
// const arr1 = []
// for (let i = 0; i < 20 * 10000; i++) {
//     if (i % 10 === 0) {
//         arr1.push(0)
//     } else {
//         arr1.push(i)
//     }
// }
// console.time('moveZero1')
// moveZero1(arr1)
// console.timeEnd('moveZero1') // 2839ms

// const arr2 = []
// for (let i = 0; i < 20 * 10000; i++) {
//     if (i % 10 === 0) {
//         arr2.push(0)
//     } else {
//         arr2.push(i)
//     }
// }
// console.time('moveZero2')
// moveZero2(arr2)
// console.timeEnd('moveZero2') // 3ms