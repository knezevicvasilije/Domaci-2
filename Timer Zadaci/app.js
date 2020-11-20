/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 1000);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
   //testMe(); // what order should these log out? Howdy or Partnah first?
  
  
  /* CHALLENGE 2 */
  
  function delayedGreet() {
    setTimeout(() => console.log("Welcome"), 3000);
  }
  // Uncomment the following line to check your work!
  //delayedGreet(); // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  
  function helloGoodbye() {
    console.log("Hello")
    setTimeout(() => console.log("Good bye"), 2000);
  }
  // Uncomment the following line to check your work!
   //helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  
  /* CHALLENGE 4 */
  
  function brokenRecord() {
    setInterval(()=> console.log("Hi again!"), 1000);
  }
  // Uncomment the following line to check your work!
  // brokenRecord(); // should log (every second): hi again
  
  
  /* CHALLENGE 5 */
  
  function limitedRepeat() {
   var interval = setInterval(() => console.log("Hi for now!"),1000);
    setTimeout(() => clearInterval(interval), 5000);
  }
  // Uncomment the following line to check your work!
   //limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
  
  function everyXsecsForYsecs(func, interval, duration) {
          const intervals = setInterval(func, interval * 1000);
        function clearInterval(){
        clearInterval(intervals);
      }
    setTimeout(clearInterval, duration * 1000);
  }
  // Uncomment the following lines to check your work!
   //function theEnd() {
   // console.log('This is the end!');
  
   //everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
  
  /* CHALLENGE 7 */
  
  function delayCounter(target, wait) {
  function loggin(){
    var count = 1;
    const interval = setInterval(() =>{
      console.log(count);
      count++;
          if(count > target){
        clearInterval(interval);
      }
    },wait);
  }return loggin;
  }
  
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
   const countLogger = delayCounter(4, 1000);
   countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3
  
  /* CHALLENGE 8 */
  
  function promised (val) {
  return new Promise((resolve) => {
      setTimeout(() => resolve(val), 2000);
    });
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
   const createPromise = promised('wait for it...');
   createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds
  