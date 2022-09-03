
/**
 * 旋转数组 k 步 - 使用 pop 和 unshift
 * 时间复杂度 O(n^2)
 * 数组是有序的，shift和unshift都会使得原本位置的数据前移或后移，本身就是一次循环
 * @param arr 
 * @param k 
 * @returns 
 */

export const rotate1 = (arr: number[], k: number): number[] => {
    const len = arr.length;
    if (!k || !len) return arr;
    const step = Math.abs(k % len);
    // O(n)
    for (let i = 0; i < step; i++) {
        const n = arr.pop();
        if (n !== null && n !== undefined) {
            arr.unshift(n) //O(n) 
        }
    }
    return arr;
}

/**
 * 旋转数组k步，使用concat
 * 时间复杂度O(1)
 * @param arr 
 * @param k 
 * @returns 
 */
export const rotate2 = (arr: number[], k: number): number[] => {
    const len = arr.length;
    if (!k || !len) return arr;
    const step = Math.abs(k % len);

    const part1 = arr.slice(-step);//取后几位
    const part2 = arr.slice(0, len - step)
    const part3 = part1.concat(part2)
    return part3;
}

const arr = [1, 2, 3, 4, 5, 6, 7]
const brr = [1, 2, 3, 4, 5, 6, 7]
const res1 = rotate1(arr, 3)
const res2 = rotate2(brr, 3)
console.log('res', res1, res2);

// 性能测试
const arr1 = []
for (let i = 0; i < 10 * 10000; i++) {
    arr1.push(i)
}
console.time('rotate1')
rotate1(arr1, 9 * 10000)
console.timeEnd('rotate1') // 699ms O(n^2)

const arr2 = []
for (let i = 0; i < 10 * 10000; i++) {
    arr2.push(i)
}
console.time('rotate2')
rotate2(arr2, 9 * 10000)
console.timeEnd('rotate2') // 1ms O(1)