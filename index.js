function sum(num) {
    let total = num
  
    function inner(nextNum) {
      if (nextNum === undefined) {
        return total
      }
      total += nextNum
      return inner
    }
  
    return inner
  }

  
console.log(sum(1)(2)(3)(4)(5)())
console.log(sum(3)(7)());    