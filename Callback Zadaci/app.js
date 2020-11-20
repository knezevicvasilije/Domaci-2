// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}
  console.log(addTwo(3));
  console.log(addTwo(10));

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + "s";
}
console.log(addS('pizza'));
console.log(addS('bagel'));
// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  //First approach
  let newArr = [];
  for (let i = 1; i <= array.length; i++) {
    newArr.push(callback(i));
  }
  return newArr;
}
function multiplyByTwo(num){
  return num * 2;
}
console.log(map([1,2,3], multiplyByTwo));



// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
		for (let item of array){
      callback(item);
    }
}
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); 
// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
		let newArr = [];
  forEach(array, function(item){
          newArr.push(callback(item));
          });
return newArr;
}
console.log(mapWith([1,2,3], multiplyByTwo));

// Challenge 7
function intersection(...arrays) {
  return arrays.reduce((accumulator, array) => {
    return array.filter((elem) => accumulator.includes(elem));
  });
}
console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


// Challenge 8
function union(...arrays) {
  return arrays.reduce((accumulator, array) =>{
    const filteredElem = array.filter((elem) => !accumulator.includes(elem));
    return accumulator.concat(filteredElem);
  })
  }
  
  console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
  // should log: [5, 10, 15, 88, 1, 7, 100]
  
  