/* global describe, test, expect */
const { dummy, totalLikes, favoriteBlog } = require('../utils/test/dummy')

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

describe('favorite blog', () => {
    test('should return the blog with the most likes', () => {
        const result = favoriteBlog([{
            _id: '5a422aa71b54a676234d17f7',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful 2',
            author: 'Edsger W. Dijkstra 2',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html 2',
            likes: 10,
            __v: 0
        }])
        expect(result).toEqual({
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful 2',
            author: 'Edsger W. Dijkstra 2',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html 2',
            likes: 10,
            __v: 0
        })
    })
})