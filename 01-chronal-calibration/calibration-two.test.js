const findDuplicate = require('./calibration-two')

test('should return 2 when input is +1 -2 +3 +1', () => {
  const input = `
    +1
    -2
    +3
    +1
  `
  expect(findDuplicate(input)).toBe(2)
})

test('should return 0 when input is +1 -1', () => {
  const input = `
    +1
    -1
  `
  expect(findDuplicate(input)).toBe(0)
})

test('should return 10 when input is +3 +3 +4 -2 -4', () => {
  const input = `
    +3
    +3
    +4
    -2
    -4
  `
  expect(findDuplicate(input)).toBe(10)
})

test('should return 5 when input is -6 +3 +8 +5 -6', () => {
  const input = `
    -6
    +3
    +8
    +5
    -6
  `
  expect(findDuplicate(input)).toBe(5)
})

test('should return 14 when input is +7 +7 -2 -7 -4', () => {
  const input = `
    +7
    +7
    -2
    -7
    -4
  `
  expect(findDuplicate(input)).toBe(14)
})
