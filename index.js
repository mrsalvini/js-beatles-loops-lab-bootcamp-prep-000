// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}.`
  }
  return array
}

function johnLennonFacts(facts) {
  var counter = 0
  while (counter < facts.length) {
    facts[counter] += "!!!"
    counter++
  }
}