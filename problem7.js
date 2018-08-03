// NOT DONE YET
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
    //we can see that the 6th prime is 13.
    // What is the 10 001st prime number?

// I tried solving this recursively but was reaching maximum call stack on 
  // repl.it so I was forced to use loops
  // Should've only iterated over odd numbers would've saved a bit more time    

const arr = [];


function checkPrime(num){
  let i = Math.floor(num/2);
  let e = 1;
  const primeArr = [];
  // findFactors(num)
  function findFactors(num){

    // while(i>=Math.floor(num/4) && e<=Math.floor(num/4)){
    //   // console.log('i is ', i)
    //   if(num%i===0){
    //     // primeArr.push(i)
    //     return false;
    //   }
    //   if(num%e===0 && e!==1){
    //     return false
    //     // primeArr.push(e)
    //   }
    //   i--
    //   e++
    //   console.log('i is', i);
    //   console.log('e is', e);
    //   return findFactors(num)
    // }

    for(i; i>=e; i--, e++){
      // console.log('i is ', i)
      if(num%i===0 && i!==1){
        // primeArr.push(i)
        return false;
      }
      if(num%e===0 && e!==1){
        return false
        // primeArr.push(e)
      }
      // i--
      // e++
      // console.log(num%i)
      // console.log('i is', i);
      // console.log('e is', e);
      // return findFactors(num)
    }


    // console.log(primeArr)
    // if(primeArr.length>1){
    //   return false
    // }
    return true
  }
  return findFactors(num)
}
w = 2
function prime(num){

  // console.log(e + ' ' + checkPrime(e))
  for (w; arr.length<num; w++){
  if(checkPrime(w)===false){
    // arr.push(e);
    // w++
    // return prime(num)
  } else{
    arr.push(w)
    // w++
    // console.log(e)
    // return prime(num)
  }
  }
  // console.log(arr)
  // if(arr.length === num){
    // console.log('ee')
    // return arr
    return arr[num-1]
  // }
}

prime(10001)
// checkPrime(9)
// checkPrime(79)
// console.log(checkPrime(4))
