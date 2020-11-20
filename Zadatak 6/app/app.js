const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

//Loop through all buttons and show their values on the screen
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let number = btns[i].getAttribute("data-num");
      screen.value += number;
    });
  }
  
  //showing result on the screen using = button

  //?????
  //pitanje - da li klasa moze da se primijeni za css a da se na neki nacin onemoguci u js (.btn) jer kada i dugme = ima klasu btn kao ostala dugmad, pored stila ispisuje svoju vrijednost (=) u inputu
  

  equalBtn.addEventListener("click", ScreenResult);

  function ScreenResult() {
    if (screen.value === "") {
      alert("input is empty");
    } else {
      let value = eval(screen.value);
      screen.value = value;
    }
  };
  //Clear input
  clearBtn.addEventListener("click", function () {
    screen.value = "";
  });
  
  //keyboard support
  function keyboardInput(key) {
    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        return false;
    } else {
        key.preventDefault();
        if (key.which === 48) {
            screen.value += "0";
        } else if (key.which === 49) {
            screen.value += "1";
        } else if (key.which === 50) {
            screen.value += "2";
        } else if (key.which === 51) {
            screen.value += "3";
        } else if (key.which === 52) {
            screen.value += "4";
        } else if (key.which === 53) {
            screen.value += "5";
        } else if (key.which === 54) {
            screen.value += "6";
        } else if (key.which === 55) {
            screen.value += "7";
        } else if (key.which === 56) {
            screen.value += "8";
        } else if (key.which === 57) {
            screen.value += "9";
        } else if (key.which === 46) {
            screen.value += ".";
        } else if (key.which === 40) {
            screen.value += "(";
        } else if (key.which === 41) {
            screen.value += ")";
        } else if (key.which === 42) {
            screen.value += "*";
        } else if (key.which === 47) {
            screen.value += "/";
        } else if (key.which === 43) {
            screen.value += "+";
        } else if (key.which === 45) {
            screen.value += "-";
        } else if (key.which === 13) {
           ScreenResult();
        } else if (key.which === 99) {
            deleteSingle();
        } else {
            screen.value = screen.value;
        }
        return true;
    }
  }

  function backspaceKeyEvent (event) {
    if (event.which === 8) {
        deleteSingle();
    }
  }
  function deleteSingle() {
    backspaceValue = screen.value;
    screen.value = backspaceValue.substr(0, backspaceValue.length - 1);
  }

  window.onload = function () {
    document.onkeypress = keyboardInput;
    document.onkeydown = backspaceKeyEvent;
    clearBtn.onclick = deleteSingle;
  };
  