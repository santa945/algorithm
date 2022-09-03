# algorithm
前端算法的学习

## 进度
* 将数组旋转k步，如`[1,2,3,4,5,6,7]`旋转3步得到 `[4，5，6，7，1，2，3]`
    * 代码：array-rotate
* 判断字符串中括号匹配，如`{4}(2)[3]`,`{d[sf(d)gd]f}`是匹配的，`{a(d[d)f]}s`是不匹配的
    * 代码：match-bracket
    * 重点：栈是使用，先进后出，和收盘子洗盘子一样，先收的盘子最后洗(左括号压栈，右括号判断出栈)
* 两个栈实现一个队列
    * 代码：two-stacks-one-queue
    * 使用一个类来编写，先进先出，两个栈倒腾
* 反转单向链表
    * reverse-link-list
    * 重点：使用数组创建链表结构，链表是查询慢增删快的有序数据结构
    * 重点：使用三个指针同时平移，防止数据丢失
    * ![指针的解释](https://raw.githubusercontent.com/santa945/algorithm/master/src/img/reverseLinkList.png)
## 单元测试
* 运行 `npx jest src/路径`查看单元测试情况
* 判断数组和对象使用`toEqual`
* 判断普通类型使用`toBe`
* 判断是否是null`toBeNull`