window.onload = () => {
  // Code your solution here...

  /*
  * Hint: Whenever you're modifying the DOM, you need to reference a node (HTML element).
  *       Try and target all the squares and figure out how to assign an event listener
  *       to handle 'click' events
  * */

  const squares = document.getElementsByClassName("square");
  var i = 0;
  squares[0].addEventListener('click', clicked0);
  squares[1].addEventListener('click', clicked1);
  squares[2].addEventListener('click', clicked2);
  squares[3].addEventListener('click', clicked3);
  squares[4].addEventListener('click', clicked4);
  squares[5].addEventListener('click', clicked5);
  squares[6].addEventListener('click', clicked6);
  squares[7].addEventListener('click', clicked7);
  squares[8].addEventListener('click', clicked8);

  function swap(){
    if (i % 2 === 0){
      i++;
    return "X";
    }
    else {
      i++;
      return "O";
    }
  }

  function clicked0() {
    squares[0].innerHTML = swap();
  }

  function clicked1() {
    squares[1].innerHTML = swap();
  }

  function clicked2() {
    squares[2].innerHTML = swap();
  }

  function clicked3() {
    squares[3].innerHTML = swap();
  }

  function clicked4() {
    squares[4].innerHTML = swap();
  }
  
  function clicked5() {
    squares[5].innerHTML = swap();
  }

  function clicked6() {
    squares[6].innerHTML = swap();
  }

  function clicked7() {
    squares[7].innerHTML = swap();
  }
  
  function clicked8() {
    squares[8].innerHTML = swap();
  }



  // Similarly for the reset button, reference it and figure out what to do when
  // a click event occurs for the button

  const buttonNode = document.getElementById("reset-btn");
  buttonNode.addEventListener('click', reset);

  function reset(){
    console.log("reset")
    const squares = document.getElementsByClassName("square");
    for(let i = 0; i < 9; i++){
      squares[i].innerHTML = "";
    }
  }
};