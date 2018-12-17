const R = require('ramda')

const formatAnswer = ([id, pos] = result) =>
  R.concat(R.take(pos)(id), R.drop(R.inc(pos))(id))

const differingPos = (id1, id2) => {
  const position = R.compose(
    R.filter(R.lte(0)),
    R.addIndex(R.map)((ch, idx) => (ch === id2.charAt(idx) ? -1 : idx)),
    R.split('')
  )(id1)
  return R.length(position) === 1 ? position[0] : -1
}

const secondReducer = (acc, id) => [acc[0], differingPos(acc[0], id), acc[2]]

const firstReducer = (acc, id) =>
  R.reduceWhile(pred, secondReducer, [id, -1, acc[2]])(acc[2])

const pred = acc => R.gt(0)(acc[1])

const findLetters = ids => R.reduceWhile(pred, firstReducer, [0, -1, ids])(ids)

const formatData = R.compose(
  R.map(R.trim),
  R.split('\n'),
  R.trim
)

const findCommonLetters = R.compose(
  formatAnswer,
  findLetters,
  formatData
)

module.exports = findCommonLetters
