import Acronym from '../../src/acronym/acronym'

describe('Testing Acronym generator class', () => {
    it('fails when a string is empty', () => {
        expect(() => Acronym.generate()).toThrow()
    })

    it('returns uppercase ', () => {
        expect(Acronym.generate('abc')).toBe('ABC')
    })

    it('returns uppercase ', () => {
        expect(Acronym.generate('abc')).toBe('ABC')
    })
})