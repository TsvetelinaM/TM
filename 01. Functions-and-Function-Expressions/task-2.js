/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function solve() {
	return function findPrimes() {
	let args=[].slice.call(arguments)
		if (args.length<2) {
			throw '';
		}
		for (let i=0; i<args.length; i+=1) {
			if (Number.isNaN(Number(args[i]))) {
				throw '';
			}
		}

		return (function () {
			let arr=[];
			let arrPrimes=[];
			let isPrime=true;
			let j=0;
			for (let i=+args[0];i<=+args[1];i+=1) {
				arr[j]=i;
				j+=1;
			}

			for (let i=0; i<arr.length; i+=1) {
				if (arr[i]>1) {

					for (let a=2; a<=arr[i]-1;a+=1 ) {
						if (arr[i]%a===0) {
							//console.log(arr[i], isPrime);
							isPrime=false;
						}

					}
					if (isPrime) {
						arrPrimes.push(arr[i]);
					}
					isPrime=true;
				}
			}

			return (arrPrimes);
		})();

	}
}

module.exports = solve;
