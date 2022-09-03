
import { findTwoNumberSum1, findTwoNumberSum2 } from './two-numbers-sum'

describe('两数之和', () => {
    it('正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 30]
        const res = findTwoNumberSum2(arr, 27)
        expect(res).toEqual([13, 14])
    })

    it('空数组', () => {
        const res = findTwoNumberSum2([], 100)
        expect(res).toEqual([])
    })

    it('找不到结果', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 30]
        const n = 45
        const res = findTwoNumberSum2(arr, n)
        expect(res).toEqual([])
    })
})
