
interface IRes {
    char: string
    length: number
}

/**
 * 求连续最多的字符和次数（嵌套循环-跳步）O(n)
 * @param str 
 * @returns 
 * @description 双重循环，i在前面，j在后面，每次找一样的，如果不一样，j中断，i跳步到j的位置
 */
export const findContinuousChar1 = (str: string): IRes => {
    const res: IRes = {
        char: '',
        length: 0
    }

    const len = str.length;
    if (!len) return res;

    let tempLength = 0; // 临时变量

    for (let i = 0; i < len; i++) {
        tempLength = 0;

        for (let j = i; j < len; j++) {
            if (str[i] === str[j]) {
                tempLength++;
            }

            if (str[i] !== str[j] || j === len - 1) {
                // 判断最大值
                if (tempLength > res.length) {
                    res.char = str[i];
                    res.length = tempLength;
                }

                if (i < len - 1) {
                    i = j - 1; // 跳步，为什么要j-1，看演示代码jumpFn
                    // 此时的i是j-1，下次进入循环体时i就会是j
                }

                break;
            }
        }
    }
    return res;
}

// jumpFn：循环中的跳步演示，用于解释为什么i=j-1;----------------------------
for (let k = 0; k < 10; k++) {
    console.log('-----开始进入循环体，此时的k是', k, '--------');
    if (k === 1) {
        console.warn('跳步')
        k = 3
    }
    console.log('代码结束，此时k为', k, '下次循环是加一的k，即', k + 1);
}
// -----------------------------------------------------------------


/**
 * 求连续最多的字符和次数（双指针）O(n)
 * @param str 
 * @returns 
 * @description 固定j的位置，循环一次i，当遇到不一样的时候，j追上i的位置
 */

export const findContinuousChar2 = (str: string): IRes => {
    const res: IRes = {
        char: '',
        length: 0
    }

    const len = str.length;
    if (!len) return res;

    let tempLength = 0;
    let i = 0;
    let j = 0;

    for (; i < len; i++) {
        if (str[i] === str[j]) {
            tempLength++;
        }

        if (str[i] !== str[j] || i === len - 1) {
            if (tempLength > res.length) {
                res.char = str[j]
                res.length = tempLength;
            }
            tempLength = 0;

            if (i < len - 1) {
                j = i;
                i--; // 同样的道理，走完循环体中的代码，下次进来之前会i++，所以先--，以保证下次进来的i还是等于此时的i，为了记录第一个str[i] === str[j]
            }
        }
    }

    return res;
}
// 功能测试
const str = 'aabbcccddeeee11223'
console.info(findContinuousChar2(str))