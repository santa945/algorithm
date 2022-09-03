/**
 * @description 括号匹配
 * @author 
 * @learn 关于栈的使用，压栈和出栈, 时间复杂度O(n) 空间复杂度O(n)
 */


const isMatch = (left: string, right: string): boolean => {
    if (left === '{' && right === '}') return true;
    if (left === '[' && right === ']') return true;
    if (left === '(' && right === ')') return true;
    return false;
}

/**
 * 判断是否括号匹配
 * @param str str
 */
export const matchBracket = (str: string): boolean => {
    const len = str.length;
    if (!len) return true; //空字符串，返回true

    const stack = [];
    const leftSymbols = '([{';
    const rightSymbols = '}])';
    // for循环：O(n)
    // 虽然有includes，但是includes和外部数据无关，无论什么量级进来，都是循环一定次数，所以includes为O(1)
    for (let i = 0; i < len; i++) {
        const s = str[i];
        if (leftSymbols.includes(s)) {
            // 左括号匹配，压栈
            stack.push(s)
        } else if (rightSymbols.includes(s)) {
            // 右括号匹配，判断栈顶是否为对应的左括号
            const top = stack[stack.length - 1];
            if (isMatch(top, s)) {
                // 是对应左括号，出栈
                stack.pop()
            } else {
                // 不是对应的左括号，不匹配
                return false;
            }
        }
    }

    // 循环后，看栈是否为空，为空则全匹配，不为空则左括号有多
    return !stack.length;
}

// 功能测试
const str = '{a(b[c]d)e}f'
console.info(111, matchBracket(str))