/**
 * 为什么next要设置为null，因为add方法是在尾部添加的，next为null，也算是个对象
 */
export interface ILinkListNode {
    value: number,
    next: ILinkListNode | null
}

export class MyQueue {
    // 私有属性
    private head: ILinkListNode | null = null;
    private tail: ILinkListNode | null = null;
    private len = 0;

    /**
     * 入队，在链表尾部，tail位置
     * @param n 
     */
    add(n: number) {
        const newNode: ILinkListNode = {
            value: n,
            next: null
        }

        // 处理head,只有链表为空的时候处理
        if (this.head === null) {
            this.head = newNode;
        }

        // 处理tail
        const tailNode = this.tail;//先将尾部存起来
        if (tailNode) {
            tailNode.next = newNode//尾部的next等于新加进来的对象
        }
        // 将tail指针指向新加进来的，也就是现在的尾部
        this.tail = newNode

        // 记录长度
        this.len++
    }

    /**
     * 出队，在链表头部，head位置
     */
    delete(): number | null {
        const headNode = this.head
        if (headNode === null) return null;
        if (this.len <= 0) return null;

        // 要删除的值取出，要返回
        const value = headNode.value;

        //将头部的next拿出来，赋值给this.head,也就是指针后移
        this.head = headNode.next

        //记录长度
        this.len--

        return value;
    }

    get length(): number {
        return this.len;
    }
}

// // 功能测试
// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info('length1', q.length)
// console.log(q.delete())
// console.info('length2', q.length)
// console.log(q.delete())
// console.info('length3', q.length)
// console.log(q.delete())
// console.info('length4', q.length)
// console.log(q.delete())
// console.info('length5', q.length)

// // 性能测试
// const q1 = new MyQueue()
// console.time('queue with list')
// for (let i = 0; i < 10 * 10000; i++) {
//     q1.add(i)
// }
// for (let i = 0; i < 10 * 10000; i++) {
//     q1.delete()
// }
// console.timeEnd('queue with list') //12ms

// const q2 = []
// console.time('queue with array')
// for (let i = 0; i < 10 * 10000; i++) {
//     q2.push(i) // 入队
// }
// for (let i = 0; i < 10 * 10000; i++) {
//     q2.shift() // 出队 shift和unshift都是操作数组头部，影响整个数组，相当于一次O(n)
// }
// console.timeEnd('queue with array')//1961ms