/* global describe, test, expect */
const { dummy, totalLikes } = require('../utils/test/dummy')

describe('dummy', () => {
    test('dummy returns one', () => {
        const result = dummy([])
        expect(result).toBe(1)
    })
})

describe('total likes', () => {
    test('when list has only one blog, equals the likes of that', () => {
        const result = totalLikes([{
            _id: '5a422aa71b54a676234d17f7',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }])
        expect(result).toBe(5)
    })
})