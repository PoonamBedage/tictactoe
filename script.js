let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;  //player x, player y

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turno = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turno){   //turrno ===true print "0"
            box.innerText = "o";
            box.style.color = "red";
            turno = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "green";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner =() => {
    for(patterns of winPatterns){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != ""  && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}



newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);