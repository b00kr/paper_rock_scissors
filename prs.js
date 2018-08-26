function generateComputerResult(){
    var computerResult = Math.floor(Math.random() * 3)
    return(computerResult);
}

// 0 = rock
// 1 = paper
// 2 = scissors

function battle(){
    debugger;
    var playerChoice = parseInt(document.getElementById("player").value);
    console.log("Player = " +playerChoice);
    var computerChoice = generateComputerResult();
    console.log("Logic = " + computerChoice);

 
    
    if (playerChoice === computerChoice) {
           console.log("Tie!");
       } else if (
           ( playerChoice === 0 && computerChoice === 1) || 
           ( playerChoice === 1 && computerChoice === 2) || 
           (playerChoice === 2 && computerChoice ===0)){
           console.log("You lose!");
       } else if (
           ( playerChoice === 0 && computerChoice === 2) || 
           ( playerChoice === 1 && computerChoice === 0) || 
           ( playerChoice === 2 && computerChoice === 1)){
           console.log("You win!");
       } else {
           console.log("You need to pick a weapon!")
       };

};

