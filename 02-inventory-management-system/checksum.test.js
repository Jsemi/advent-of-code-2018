const checksum = require('./checksum')

test('should return a checksum of 12', () => {
  const input = `
    abcdef
    bababc
    abbcde
    abcccd
    aabcdd
    abcdee
    ababab
  `
  expect(checksum(input)).toBe(12)
})
