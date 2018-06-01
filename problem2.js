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