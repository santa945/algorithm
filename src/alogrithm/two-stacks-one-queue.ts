

export class MyQueue {
    // 私有属性
    private stack1: number[] = []
    private stack2: number[] = []

    add(n: number) {
        this.stack1.push(n)
    }

    delete(): number | null {
        let res;
        const stack1 = this.stack1;
        const stack2 = this.stack2;
        //将stack1的所有元素搬到stack2
        while (stack1.length) {
            const n = stack1.pop()
            n && stack2.push(n)
        }
        // 将stack2出栈
        res = stack2.pop()
        // 将出栈后的stack2的所有元素搬回stack1
        while (stack2.length) {
            const n = stack2.pop()
            n && stack1.push(n)
        }
        return res || null;
    }

    get length(): number {
        return this.stack1.length;
    }
}

// // 功能测试
// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)
