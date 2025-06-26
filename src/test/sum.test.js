/* global describe, test, expect */
const { dummy } = require('../utils/test/dummy')

describe('dummy', () => {
    test('dummy returns one', () => {
        const result = dummy([])
        expect(result).toBe(1)
    })
})
