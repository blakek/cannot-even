import test from 'ava'
import noEvensGivenHere from '.'

test('refuses to even', t => {
  t.throws(() => {
    noEvensGivenHere(2)
  }, 'Cannot even')

  t.throws(() => {
    noEvensGivenHere(4)
  }, 'Cannot even')

  t.throws(() => {
    noEvensGivenHere(100)
  }, 'Cannot even')

  t.throws(() => {
    noEvensGivenHere(839823749827356)
  }, 'Cannot even')
})

test('allows odds', t => {
  t.true(noEvensGivenHere(3))
  t.true(noEvensGivenHere(5))
  t.true(noEvensGivenHere(8.5))
  t.true(noEvensGivenHere(2893749827345))
})
