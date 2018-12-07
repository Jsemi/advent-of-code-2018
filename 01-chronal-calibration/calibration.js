const R = require('ramda')

const calibrate = R.compose(
  R.sum,
  R.split('\n')
)

module.exports = calibrate
