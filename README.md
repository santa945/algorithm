# algorithm
前端算法的学习

## 前提
安装 nodejs v14+ ，安装 `npm` 或 `yarn`
## 运行
* 安装依赖：`npm install` 或 `yarn install`
* 本地运行：`npm run dev` 或 `yarn dev` ，浏览器访问 `http://localhost:3000/`

## 进度
* 将数组旋转k步，如`[1,2,3,4,5,6,7]`旋转3步得到 `[4，5，6，7，1，2，3]`
    * 代码：array-rotate
* 判断字符串中括号匹配，如`{4}(2)[3]`,`{d[sf(d)gd]f}`是匹配的，`{a(d[d)f]}s`是不匹配的
    * 代码：match-bracket
    * 重点：栈是使用，先进后出，和收盘子洗盘子一样，先收的盘子最后洗(左括号压栈，右括号判断出栈)
* 两个栈实现一个队列
    * 代码：queue-with-two-stacks
    * 使用一个类来编写，先进先出，两个栈倒腾
* 反转单向链表
    * reverse-link-list
    * 重点：使用数组创建链表结构，链表是查询慢增删快的有序数据结构
    * 重点：使用三个指针同时平移，防止数据丢失
    * ![指针的解释](https://raw.githubusercontent.com/santa945/algorithm/master/src/img/reverseLinkList.png)
* 单向链表实现队列
    * queue-with-link-list
    * 重点：单独记录长度length，因为遍历需要O(n)
    * 重点：从尾部添加，从头部删除，因为单向链表没有prev，从头部添加可以，但是从尾部删除，不知道尾部的上一个是谁
* 二分查找
    * 代码：match-bracket
    * 时间复杂度O(logn)
    * 循环的速度会比递归的速度快，虽然它们都是相同的时间复杂度，但是递归是调用多次函数，每次调用开销都会大一点，而循环只调用了一次函数
* 有序数组查找两数之和，如在数组`[1,2,4,7,11,15.16]`中找到两个数之和为 `22`的，即`[7,15]`
    * 代码：two-numbers-sum
    * 重点：嵌套循环时间复杂度O(n^2),双指针时间复杂度O(n)
    * 理解：为什么可以双指针，例如先将`1`和`16`相加，结果小于目标值`22`,此时如果希望相加的值变大一点点，只需要左侧往中间靠拢`2`和`16`相加，还是不行，证明还是太小了，左侧还要往里靠近一点，等到`7`和`16`的时候，大于目标值，这时候要小一点，需要右侧往里靠拢`7`和`15`
## 单元测试
* 运行 `npx jest src/路径`查看单元测试情况
* 判断数组和对象使用`toEqual`
* 判断普通类型使用`toBe`
* 判断是否是null`toBeNull`