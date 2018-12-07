const R = require('ramda')

const findFreq = ([freq, seenFreqs] = acc, val) => {
  const newFreq = R.add(freq)(val)
  if (R.contains(newFreq)(seenFreqs)) return R.reduced(newFreq)
  return [newFreq, R.append(newFreq)(seenFreqs)]
}

function* generateFreqs(input) {
  while (true) yield* input
}

const formatData = R.compose(
  R.map(Number),
  R.split('\n'),
  R.trim
)

const findDuplicate = R.compose(
  R.reduce(findFreq, [0, [0]]),
  generateFreqs,
  formatData
)

module.exports = findDuplicate
