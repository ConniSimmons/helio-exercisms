import { hello } from './hello-world'

describe('hello()', () => {
    test('works with empty array', () => {
        expect(hello()).toEqual([])
    })
    xtest('works with one number', () => {
        expect(hello([1])).toEqual([1])
    })
    xtest('sorts numbers', () => {
        expect(hello([ 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })
})
    

    