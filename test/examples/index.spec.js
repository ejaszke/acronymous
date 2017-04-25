import sinon from 'sinon'

// Here, I am importing a named function with object destructuring
import {
    alwaysTrue,
    isEven,
    countLetters,
    throttle
} from '../../src/examples'

// alternative: export default function () | import myFunction from '../src'

describe('Testing Dev Ops Setup', () => {
    it('exposes the Jest expect method', () => {
        expect(1).not.toEqual(2)
    })

    it('works with ES6 import export', () => {
        expect(alwaysTrue()).toBe(true)
    })
})

describe('Testing the isEven function', () => {
    it('exists', () => {
        expect(isEven(0)).toBe(true)
    })

    it('checks that a number is even', () => {
        const evenNumber = Math.round(Math.random()) * 2
        expect(isEven(evenNumber)).toBe(true)
    })

    it('checks that a number is odd', () => {
        const oddNumber = Math.round(Math.random()) * 2 + 1
        expect(isEven(oddNumber)).toBe(false)
    })

    it('fails when a string is passed', () => {
        try {
            isEven('abc')
            expect(isEven).toThrow(Error)
        } catch (error) {
            expect(error.message === 'Must be a number')
        }
    })
})

describe('Testing the countLetters function', () => {
    it('returns a number when a string is passed', () => {
        expect(countLetters('abc')).toEqual(3)
    })

    it('fails when a non-string is passed', () => {
        try {
            countLetters(null)
            expect(isEven).toThrow(Error)
        } catch (error) {
            expect(error.message === 'Must be a string')
        }
    })
})

// Example from http://sinonjs.org/
describe('Testing the throttle function', () => {
    var clock

    beforeAll(() => { clock = sinon.useFakeTimers() })
    afterAll(() => { clock.restore() })

    it('calls callback after 100ms', () => {
        const callback = sinon.spy()

        throttle(callback)()

        clock.tick(99)
        expect(callback.notCalled).toBe(true)

        clock.tick(1)
        expect(callback.calledOnce).toBe(true)

        expect(new Date().getTime()).toEqual(100)
    })
})