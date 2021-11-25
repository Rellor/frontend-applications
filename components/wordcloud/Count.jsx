const Wordcountcomp = wordsRemovedI.forEach(word => {
  if(finalData.some(el => el.word === word)) {
    finalData.find(el => {
       if(el.word === word) { el.amount = el.amount + 1 }
    })
  } else {
    finalData.push({ word: word, amount: 1 })
  }
})

export default Wordcountcomp;
