// sort functions for 'liftoff':

function liftoff(instructions){
 let sortByDescendingNumbers = (a, b) => {
   if (b > a) return 1
   else if (b === a) return 0
   else return -1
 }
 
 let sortedInstructions = instructions.sort(sortByDescendingNumbers)
 let liftoffMessage = ''
 sortedInstructions.forEach(instruction => {
   liftoffMessage += `${instruction} `
 })
 return liftoffMessage + 'liftoff!'
}


///////////////


// same as: 

function liftoff(instructions){
  return instructions.sort(function(a, b) {return b - a}).join(' ') + " liftoff!"


}

// Build Deck (one line solution):

const buildDeck = ['ace','king','queen','jack','ten','nine','eight','seven','six','five','four','three','two'].reduce((acc, card, index, array) => ['hearts','clubs','spades','diamonds'].map(suit => `${card} of ${suit}`).concat(acc), [])
