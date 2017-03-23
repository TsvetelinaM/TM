/* Task Description */
/*
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number

*/

function solve() {
 return function sum(args) {
	 /*if (arguments.length===0) {
		 return 'The parameter is missing';
	 } */
	  if (args.length === 0) {
		 return null;
	 }
		for (let i=0; i<args.length;i+=1) {
		 if (Number.isNaN(Number(args[i]))) {
			 throw 'Not a number';
		 }
	 }
		return (args.reduce((x,y)=>x+(+y),0));
	}
}


module.exports = solve;
