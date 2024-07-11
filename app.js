let playerScore = 0;
let comScore = 0;

let options = document.querySelectorAll(".option");
let msg = document.querySelector("#msg");
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");

const compturn = ()=>{
    const choice = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return choice[randIdx];

}

const draw = ()=>{
   msg.innerHTML = "Game was draw. Play again"
    msg.style.background = "#586F7C"
    msg.style.color = "#000000"
}

const result = (uwin,user,com)=>{
    if(uwin)
    {
        playerScore++;
        msg.innerHTML = `You win! your ${user} beats ${com}`;
        player.innerHTML = playerScore;
        msg.style.background = "#F4F4F9"
        msg.style.color = "#000000"
    }
    else{
        comScore++;
        msg.innerHTML = `You lose! ${com} beats your ${user}`;
        computer.innerHTML = comScore;
        msg.style.background = "#000000"
        msg.style.color = "#F4F4F9"
    }
}
const wingame = (user,com) =>{
    let uwin = true;
    if(user == com){
        draw();
    }
    else{
        if(user == "rock"){
             uwin = com === "paper" ? false:true;
        }
        else if(user == "paper"){
            uwin = com === "scissors" ? false:true;
        }
        else{
            uwin = com === "rock" ?false:true;
        }
        result(uwin,user,com);
    }
}
const game = (user)=>{
   const com = compturn();
   wingame(user,com);
}
options.forEach((option) =>{
    option.addEventListener("click", ()=>{
        let clicked = option.getAttribute("id");
        game(clicked);
    })
})