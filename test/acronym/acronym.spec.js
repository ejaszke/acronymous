import Acronym from '../../src/acronym/acronym'

describe('Testing Acronym generator class', () => {
    it('fails when a string is empty', () => {
        expect(() => Acronym.generate()).toThrow()
    })

    it('returns uppercase ', () => {
        expect(Acronym.generate('abc')).toBe('ABC')
    })
    
    it('returns SKORPION from PPHU Skorpion ', () => {
        expect(Acronym.generate('PPHU Skorpion')).toBe('SKORPION')
    })

    it('returns only 16 characters from name ', () => {
        expect(Acronym.generate('characterscharacterscharacters')).toHaveLength(16)
    })
    
})