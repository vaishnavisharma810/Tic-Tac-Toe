console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.wav")
let audioturn = new Audio("ting.wav")
let gameover = new Audio("gameover.wav")
let tada = new Audio('tada.mp3')

let turn = "X"
let isgameover = false

//Function to change the turn
const changeturn = ()=>{
    return turn === "X" ? "0" : "X"
}

//Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6],
        [2, 5, 8]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            music.pause()
            tada.play()
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "300px"
        }
    })
}

//Game Logic (Main)
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext'); //span k andr ka content chnage hoga
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn()
            audioturn.play();
            checkWin(); //Has Someone won
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Add on click Listener to reset

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px"
})