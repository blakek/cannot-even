function cannotEven (num) {
  if (num % 2 === 0) {
    throw Error('Cannot even')
  }

  return true
}

module.exports = cannotEven
