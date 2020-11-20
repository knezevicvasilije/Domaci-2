const inputElem = document.querySelector('#noOfElements');
const btnAddElem = document.querySelector('#noOfElementsBtn');
const addBtn = document.querySelector('#add');
const deleteBtn = document.querySelector("#delete");
const showBtn = document.querySelector("#show");
const palCheck = document.querySelector("#palCheck");
const resetAll = document.querySelector('.resetAll');

var arr = [];
var input;
function createElements(){
    //multiple elements
    arr.forEach(element => {
         input = document.createElement("input");
        input.type = "text";
        input.className ="charInput";
        document.getElementById("boxes").appendChild(input);
      });
}

function createElement(){
 input = document.createElement("input");
        input.type = "text";
        input.className ="charInput";
        document.getElementById("boxes").appendChild(input);
}

btnAddElem.addEventListener('click', () =>{
    var value = inputElem.value;
 var noOfElem = parseInt(value);
 //console.log(2+ noOfElem);
for(let i = 0; i < noOfElem; i++){
    arr.push("");
}
inputElem.value = "";
createElements();
});

//Add button (+)
addBtn.addEventListener('click', ()=>{
    arr.push("");
   createElement();
})

function deleteElement(){
    
}

deleteBtn.addEventListener('click', ()=>{
  
   document.getElementById("boxes").removeChild(input);
   arr.pop();
   console.log(arr);
});

var word = [];
function valid(){
    const showWord = document.querySelector(".showWord");
    var inputs = document.getElementsByClassName( 'charInput' );
    word  = [].map.call(inputs, function( input ) {
        return input.value;
    }).join( '' );
   showWord.innerHTML = word;
}

showBtn.addEventListener('click', ()=>{
   valid();
});
palCheck.addEventListener('click', () =>{
    isPalindrome(word);
})


function isPalindrome(str){ 
    const output = document.querySelector('.output');
    const isPal = document.querySelector('.isPalindrome');
    const reverseStr = str.split('').reverse().join('');
    if( reverseStr === str){
        isPal.innerHTML = "The entered word is palindrome!";
        isPal.style = "color:green;";
       isPal.classList.add('isPalShow');
    }else{
        isPal.innerHTML = "The entered word is not a palindrome!";
        isPal.style = "color:red;";
        isPal.classList.add('isPalShow');
    }
}

resetAll.addEventListener('click', () =>{
    window.location.reload();
})
