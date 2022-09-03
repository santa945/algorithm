export interface ILinkListNode {
    value: number,
    next?: ILinkListNode
}

/**
 * 根据数组创建单向链表
 * @param arr number arr
 */
export const createLinkList = (arr: number[]): ILinkListNode => {
    const len = arr.length;
    if (!len) throw new Error('数组为空');

    // 因为是包含关系，和洋葱一样，所以要从最内层开始生成，也就是数组最后的一个开始
    let curNode: ILinkListNode = {
        value: arr[len - 1]
    }

    //优化: 如果长度为1，则不用循环了，就一个
    if (len === 1) return curNode;
    // 如果arr=[1,2,3,4],len为4，则i从倒数第二位开始，也就是arr[2]倒着循环，一直到arr[0]
    for (let i = len - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode
        }
    }
    // // 使用正循环，就需要单独计算索引k, 倒数第二个，则为len-2
    // for (let i = 0; i <= len - 2; i++) {
    //     const k = len - 2 - i; // 对应的索引
    //     curNode = {
    //         value: arr[k],
    //         next: curNode
    //     }
    // }
    return curNode;
}

/**
 * 反转单向链表函数
 * @param listNode 
 */
export const reverseLinkList = (listNode: ILinkListNode): ILinkListNode => {
    // 定义三个指针
    let prevNode: ILinkListNode | undefined = undefined;
    let curNode: ILinkListNode | undefined = undefined;
    let nextNode: ILinkListNode | undefined = listNode;

    // 以nextNode为主，遍历链表
    while (nextNode) {
        // 第一次进来，什么都没执行，只会移动三个指针，让curNode移到表头，nextNode移到第二个，preNode还在表头前，为空

        // 第二次进来，curNode是第一次的nextNode,也就是穿进来的初始值表头，指向第一个元素，删掉next，防止循环引用
        if (curNode && !prevNode) {
            // @ts-ignore
            // 不需要担心丢失，因为这时候curNode.next等同于此时的nextNode，下面会设置curNode = nextNode
            // 其实是从一个{value:1,next:{...}}很大的对象删成{value:1}
            delete curNode.next
        }

        // 第三次及以后进来，反转指针, 自己的next等于自己前面那个
        if (curNode && prevNode) {
            // @ts-ignore
            // 第三次进来，此时因为指针移动，prevNode已经是刚刚的curNode,即{value:1}
            // 而此时curNode是刚刚的nextNode,即{value:2,next:{value:3,next:{...}}},此处将很长的next替换成prevNode这种短对象{value:1}
            curNode.next = prevNode
        }
        console.log('-----------看每次打印的值--------------------');
        console.log('prevNode', prevNode && JSON.parse(JSON.stringify(prevNode)));
        console.log('curNode', curNode && JSON.parse(JSON.stringify(curNode)));
        console.log('nextNode', nextNode && JSON.parse(JSON.stringify(nextNode)));

        // 整体向后移动指针
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode?.next
    }
    //补充，当curNode指向最后一个时，即nextNode为空时，此时curNode没有设置next，因为不在循环体里
    // 单独设置curNode的next
    curNode!.next = prevNode
    return curNode!;
}
const arr = [1, 2, 3, 4, 5, 6, 7]
const linkList = createLinkList(arr)
console.log('arr', arr);
console.log('linkList', linkList);
const list1 = reverseLinkList(JSON.parse(JSON.stringify(linkList)))
console.info('list1:', list1)