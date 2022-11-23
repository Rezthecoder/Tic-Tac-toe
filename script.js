let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn ="X";
let isgameover = false;


//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
//function to check for a win
const checkWin = () => {
    let text = document.getElementsByClassName("textbox");
    let wins = [
    
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {

        if(text[e[0]].innerText === text[e[1]].innerText && text[e[1]].innerText === text[e[2]].innerText && text[e[1]].innerText !== ""){
          
            document.querySelector(".info").innerText = text[e[0]].innerText + " Won";
            isgameover = true;
            
        }

})
}
    


//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText =element.querySelector(".textbox");
  element.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
       turn =changeTurn();
      audioturn.play();
      checkWin();
        if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
    
        }
    }
    })
})
