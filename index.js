function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts){
  var array = []
  var counter = 0

  while (counter < facts.length){
    array.push= (`${facts[counter]}!!!`)
    counter++
  }

  return array
}

 function iLoveTheBeatles(number){
   var array = [];
   do {
     array.push("I love the Beatles!");
     number++;
   } while (number < 15);
   return array;
 }
