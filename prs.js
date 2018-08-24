function generateComputerResult(){
    var computerResult = Math.floor(Math.random() * 3)
    return(computerResult);
}

function battle(){
    var playerChoice = document.getElementById("player").value;
    var computerChoice = generateComputerResult();
    console.log(playerChoice);
    console.log(computerChoice);
}