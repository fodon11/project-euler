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

// Find a factor for a certain number and puts it in an array
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
	
// Checks if the number is prime
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