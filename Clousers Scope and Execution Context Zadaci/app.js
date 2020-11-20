// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
    function printHello(){
      console.log("hello")
    }return printHello;
    }
    
    // /*** Uncomment these to check your work! ***/
    //const function1 = createFunction();
     //function1(); // => should console.log('hello');
    
    
    // CHALLENGE 2
    function createFunctionPrinter(input) {
        function printer(){
        console.log(input);
      }
      return printer;
    }
    
    // /*** Uncomment these to check your work! ***/
     //const printSample = createFunctionPrinter('sample');
    // printSample(); // => should console.log('sample');
     //const printHello = createFunctionPrinter('hello');
     //printHello(); // => should console.log('hello');
    
    
    // CHALLENGE 3
    function outer() {
      let counter = 0; // this variable is outside incrementCounter's scope
      function incrementCounter () {
        counter ++;
        console.log('counter', counter);
      }
      return incrementCounter;
    }
    
    const willCounter = outer();
    const jasCounter = outer();
    
    // Uncomment each of these lines one by one.
    // Before your do, guess what will be logged from each function call.
    
    // /*** Uncomment these to check your work! ***/
     //willCounter();
     //willCounter();
    // willCounter();
    
    // jasCounter();
    // willCounter();
    
    
    function addByX(x) {
        function add(num){
        return num + x;
      }
      return add;
    }
    
    // /*** Uncomment these to check your work! ***/
     const addByTwo = addByX(2);
    //console.log(addByTwo(1)); // => should return 3
    //console.log(addByTwo(2)); // => should return 4
    // addByTwo(3); // => should return 5
    
    // const addByThree = addByX(3);
    // addByThree(1); // => should return 4
    // addByThree(2); // => should return 5
    
    // const addByFour = addByX(4);
    // addByFour(4); // => should return 8
    // addByFour(5); // => should return 9
    
    
    // CHALLENGE 4
    function once(func) {
    var count = 0;
    var output;
      function callB(num){
        count++;
        return count == 1 ? (output = func(num)) : output;
      }
      return callB;
    }
    
    
    // /*** Uncomment these to check your work! ***/
     const onceFunc = once(addByTwo);
    // console.log(onceFunc(4));  // => should log 6
    //console.log(onceFunc(10));  // => should log 6
    // console.log(onceFunc(9001));  // => should log 6
    
    
    // CHALLENGE 5
    function after(count, func) {
    let counter = 0;
      function callB(){
        counter++;
        if(counter >= count){
          return func();
        }
      }
      return callB;
    }
    
    // /*** Uncomment these to check your work! ***/
    const called = function() { console.log('hello') };
    const afterCalled = after(3, called);
     //afterCalled(); // => nothing is printed
    ////afterCalled(); // => nothing is printed
    //afterCalled(); // => 'hello' is printed
    
    
    // CHALLENGE 6
    function delay(func, wait) {
        setTimeout(() => func(), wait);
    }
    //delay(function test(){
     // console.log("lala");
    //}, 1000);
    
    
    // CHALLENGE 7
    function rollCall(names) {
        var counter = 0;
     function namesOrder(){
       
       if(counter < names.length){
         console.log(names[counter]);
       }else{
         console.log("Everyonw accounted for.");
       }
       counter++;
     }
      return namesOrder;
    }
    
    // /*** Uncomment these to check your work! ***/
    const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
    rollCaller(); // => should log 'Victoria'
    rollCaller() // => should log 'Juan'
     rollCaller() // => should log 'Ruth'
     rollCaller() // => should log 'Everyone accounted for'
    
    // CHALLENGE 8
function saveOutput(func, magicWord) {
    const obj = {};
      function checkPw(num){
        if(num !== magicWord){
          obj[num] = func(num);
          return obj[num];
        }else{
          return obj;
        }
      }
      return checkPw;
    }
    
    // /*** Uncomment these to check your work! ***/
    const multiplyBy2 = function(num) { return num * 2; };
    const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
     //console.log(multBy2AndLog(2)); // => should log 4
    //console.log(multBy2AndLog(9)); // => should log 18
     //console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


    // CHALLENGE 9
function cycleIterator(array) {
    var count = -1;
      function cycling(){
       count++;
        if(count == array.length){
          count = 0;
        } 
        return array[count];
        
      }
      return cycling;
    }
    
    // /*** Uncomment these to check your work! ***/
    const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
    const getDay = cycleIterator(threeDayWeekend);
     console.log(getDay()); // => should log 'Fri'
    console.log(getDay()); // => should log 'Sat'
     console.log(getDay()); // => should log 'Sun'
     console.log(getDay()); // => should log 'Fri'


     //Uuuu >.<
    
     // CHALLENGE 10
function defineFirstArg(func, arg) {
    function passedFunc(sizeTwo){
      return func(arg, sizeTwo);
    }
      return passedFunc;
    }
    
    // /*** Uncomment these to check your work! ***/
     //const subtract = function(big, small) { return big - small; };
     //const subFrom20 = defineFirstArg(subtract, 20);
     //console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
const time = {};
  function showTime(invokedNum){
    time.date = new Date();
    time.outpu = func(invokedNum);
    return time;
  }
  return showTime;
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
 console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

 // CHALLENGE 13
function createSecretHolder(secret) {
	var password = secret;
const secretObj = {
  setSecret(pw){
  password = pw;
  },
  getSecret(){
    return password;
  },
}
return secretObj;
}

// /*** Uncomment these to check your work! ***/
 const secretObj = createSecretHolder(5);
console.log(secretObj.getSecret()) // => returns 5
secretObj.setSecret(2);
console.log(secretObj.getSecret());// => returns 2

  
  
  // CHALLENGE 14
function callTimes() {
	var counter = 0;
  function called(){
    counter++;
    return counter;
  }
  return called;
}

// /*** Uncomment these to check your work! ***/
 let myNewFunc1 = callTimes();
 let myNewFunc2 = callTimes();
console.log( myNewFunc1());
console.log( myNewFunc1());
console.log( myNewFunc1());
console.log( myNewFunc2());
console.log( myNewFunc2());// => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

  