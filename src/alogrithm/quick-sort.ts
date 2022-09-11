/**
 * 快速排序，使用splice，O(nlogn)
 * @param arr 
 * @returns 
 */
export const quickSort1 = (arr: number[]): number[] => {
    const len = arr.length;
    if (!len) return arr;

    const midIndex = Math.floor(len / 2);
    const midValue = arr.splice(midIndex, 1)[0];

    const left = [];
    const right = [];

    // 这里不能使用len，因为arr已经被抠出去一个值了，短了
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        if (n < midValue) {
            left.push(n);
        } else {
            right.push(n);
        }
    }

    return quickSort1(left).concat([midValue], quickSort1(right))
}

/**
 * 快速排序，使用slice不改变原数组，O(nlogn)
 * @param arr 
 * @returns 
 */
export const quickSort2 = (arr: number[]): number[] => {
    const len = arr.length;
    if (!len) return arr;

    const midIndex = Math.floor(len / 2);
    const midValue = arr.slice(midIndex, midIndex + 1)[0]; // 这里写成arr[midValue]也是可以的

    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < len; i++) {
        // 不加这个判断，每次都会push到right，那right永远都有值，会导致栈溢出
        // 例如arr=[1];第一次进来，分成left=[],right=[1];然后right递归进来，还是分成left=[],right=[1],死循环了
        // 当数组长度为1是，很明显只剩下midValue了，这时候left=[],right=[]
        if (i !== midIndex) {
            const n = arr[i];
            if (n < midValue) {
                left.push(n);
            } else {
                right.push(n)
            }
        }
    }

    return quickSort2(left).concat([midValue], quickSort2(right))
}
// 功能测试
const arr1 = [1, 4, 6, 8, 2, 5, 3, 9, 7];
console.log(quickSort2(arr1));
