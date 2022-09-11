
import { format1, format2 } from './thousands-format'

describe('数组千分位格式化', () => {
    it('正常', () => {
        const n = 12345678900
        const res = format2(n)
        expect(res).toBe('12,345,678,900')
    })
    it('小于 1000', () => {
        expect(format2(0)).toBe('0')
        expect(format2(10)).toBe('10')
    })
})