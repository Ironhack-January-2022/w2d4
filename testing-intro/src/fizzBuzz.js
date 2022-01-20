function fizzBuzz(number, //short way string = '') {
	/*if(number % 15 === 0) {
		return 'fizzbuzz'
	}
	
	if(number % 3 === 0) {
		return 'fizz'
	}
	if(number % 5 === 0) {
		return 'buzz'
	}
	return number
}*/

// short way

let string = ''
if (number % 3 === 0) string += 'fizz'
if (number % 5 === 0) string += 'buzz'
return string || number




if (typeof module !== undefined) {
	module.exports = fizzBuzz;
}