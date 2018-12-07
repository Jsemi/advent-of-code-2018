const calibrate = require('./calibration')

test('should return 3 when input is +1 -2 +3 +1', () => {
  const input = `
    +1
    -2
    +3
    +1
  `
  expect(calibrate(input)).toBe(3)
})

test('should return 3 when input is +1 +1 +1', () => {
  const input = `
    +1
    +1
    +1
  `
  expect(calibrate(input)).toBe(3)
})

test('should return 0 when input is +1 +1 -2', () => {
  const input = `
    +1
    +1
    -2
  `
  expect(calibrate(input)).toBe(0)
})

test('should return -6 when input is -1 -2 -3', () => {
  const input = `
    -1
    -2
    -3
  `
  expect(calibrate(input)).toBe(-6)
})
