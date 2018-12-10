const findCommonLetters = require('./checksum-two')

test('should return common letters', () => {
  const input = `
    abcde
    fghij
    klmno
    pqrst
    fguij
    axcye
    wvxyz
  `
  expect(findCommonLetters(input)).toBe('fgij')
})
