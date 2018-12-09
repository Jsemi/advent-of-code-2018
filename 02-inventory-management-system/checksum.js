const R = require('ramda')

const findDuplicates = ([twos, threes] = acc, val) => {
  const countLetters = R.compose(
    R.values,
    R.countBy(R.identity),
    R.split('')
  )(val)
  const hasTwo = R.includes(2)(countLetters)
  const hasThree = R.includes(3)(countLetters)
  if (hasTwo && hasThree) return [R.inc(twos), R.inc(threes)]
  if (hasTwo) return [R.inc(twos), threes]
  if (hasThree) return [twos, R.inc(threes)]
  return [twos, threes]
}

const formatData = R.compose(
  R.map(R.trim),
  R.split('\n'),
  R.trim
)

const checksum = R.compose(
  R.apply(R.multiply),
  R.reduce(findDuplicates, [0, 0]),
  formatData
)

module.exports = checksum
