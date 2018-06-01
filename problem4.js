// This function gets the largest palindrome product of two 3-digit numbers
function multiplyNum(number){
 num1 = number;
 num2 = number;
 palindrome = [];

 while (num1>=num2 && num1>800 && num2>800){
   console.log('num1 is ' + num1);
   console.log('num2 is ' + num2);
   let newNum;
   
   if (num1-num2>0){
    newNum = num1*num2;
    console.log(newNum);
    checkIfPalindrome(newNum);
    num1 --;
   }

   if (num1 == num2){
    console.log('num1 is equal to ' + num1);
    console.log('num2 is equal to ' + num2);
    newNum = num1*num2;
    console.log(newNum);
    checkIfPalindrome(newNum);
    num1 = number;
    num2 --;
   }
  console.log('');
  if (palindrome.length >4){
    break
  }
 }
   console.log('')
   console.log(Math.max(...palindrome))
}

function checkIfPalindrome(num){
  let lumber = Array.from(num.toString());
  let equal = [];
  console.log(lumber)
  lumber.forEach(function(e, i){
    console.log(e)
    if (e === lumber[lumber.length - (1+i)]){
      equal.push('');
    }
    if (equal.length == lumber.length){
      console.log('It\'s a Palindrome!');
      palindrome.push(num)
    }
    console.log('')
  })
  console.log(equal)
}