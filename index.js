// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
function sum3(){
	let x=0;
    for (var i=0; i<1000; i++){
        if (i%3 === 0 || i%5 === 0){
			x += i;
        }
    }
	console.log(x)
}

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function fibonacci(){
	e=1;
	f=2;
	p=0;
    while (e < 4000000-e){
		g = f+e
		e = f;
		f = g;
		if(e%2 === 0){
			p += e;
        }
    }
console.log(p)
}

// What is the largest prime factor of the number 600851475143 ?
function findPrimeFactors(num){
	factor = [];
	factor2 = [];
	// findFactor(num, factor);
	checkIfPrime(num, factor)
	console.log(factor)
	checkIfPrime(factor[1], factor)
	console.log(factor);
  
	checkIfPrime(factor[2], factor)
	console.log(factor)
  
	checkIfPrime(factor[3], factor)
	console.log(factor)
	// findFactor(factor[1], factor2);
	
	// console.log(factor2);
  
	// checkIfPrime(factor[0]);
	// checkIfPrime(factor[1], factor);
	// console.log(factor);
	// findFactor(factor2[0], factor2);
	// factor2.push(factor2[0]/factor2[1]);
}
  
  
function findFactor(num, array){
	let o;
	for (var i=2; i<num; i++){
		if (num % i === 0){
		array.pop();
		array.push(i);
		o = i
		break;
		}
	}
	array.push(num/o)
}
  
function checkIfPrime(num, array, array2){
	let number = [];
	for (var i=2; i<num; i++){
	  if (num % i === 0){
		number.push(i);
		break;
	  }
	}
	if (number.length > 0){
	  console.log(num + ' is not prime');
	  findFactor(num, array)
	} else if (number.length == 0){
	  console.log(num + ' is a prime number');
	}
}