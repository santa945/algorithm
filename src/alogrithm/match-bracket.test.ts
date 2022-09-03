import { matchBracket } from './match-bracket'

describe('括号匹配', () => {
    it('正常匹配', () => {
        const str = '{a(v[d]g)d}'
        const res = matchBracket(str)
        expect(res).toBe(true)
    })

    it('非正常匹配', () => {
        const str = '{a(v[d)f]d}'
        const res = matchBracket(str)
        expect(res).toBe(false)
    })

    it('多右括号匹配', () => {
        const str = '{a(v[d]g)d}s}'
        const res = matchBracket(str)
        expect(res).toBe(false)
    })

    it('多左括号匹配', () => {
        const str = '(f{a(v[d]g)d}'
        const res = matchBracket(str)
        expect(res).toBe(false)
    })

    it('空字符串匹配', () => {
        const res = matchBracket('')
        expect(res).toBe(true)
    })
})