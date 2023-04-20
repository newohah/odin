let roundResult = document.querySelector('.result');
let playerScrBrd = document.querySelector('.scoreboard_player');
let compScrBrd = document.querySelector('.scoreboard_comp');
let gameWinner = document.querySelector('.game_result');
let restrtGame = document.querySelector('.restart_game');
let playerScore = 0;
let compScore = 0;

// Computer choice

function getComputerChoice() {
    const compChoice = ['rock', 'paper', 'scissors']; 
    const botRandomChoice = Math.floor(Math.random() * compChoice.length);
    return compChoice[botRandomChoice];
}

// Player choice
let buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        let playerPick = e.target.innerText;
        let Botpick = getComputerChoice();
        playRound(playerPick, Botpick);
        checkForWinner(playerScore, compScore);
        console.log('Player:', playerPick, 'Bot:', Botpick)
        
    });
});


function playRound(playerSelection, computerSelecttion){

    if(playerSelection === computerSelecttion){
        roundResult.innerText = `Its a draw! Try again.`;
    }
    else if(playerSelection == 'rock' && computerSelecttion == 'scissors'){
        roundResult.innerText = `You win! ${playerSelection} beats ${computerSelecttion}`;
        playerScrBrd.innerText = `Player Score: ${playerScore += 1}`;
    }
    else if(playerSelection == 'paper' && computerSelecttion == 'rock'){
        roundResult.innerText = `You win! ${playerSelection} beats ${computerSelecttion}`;
        playerScrBrd.innerText = `Player Score: ${playerScore += 1}`;
    }
    else if(playerSelection == 'scissors' && computerSelecttion == 'paper'){
        roundResult.innerText = `You win! ${playerSelection} beats ${computerSelecttion}`;
        playerScrBrd.innerText = `Player Score: ${playerScore += 1}`;
    }
    else if(computerSelecttion == 'scissors' && playerSelection == 'paper'){
        roundResult.innerText = `You lost! ${computerSelecttion} beats ${playerSelection}`;
        compScrBrd.innerText = `Computer Score: ${compScore += 1}`;
    }
    else if(computerSelecttion == 'paper' && playerSelection == 'rock'){
        roundResult.innerText = `You lost! ${computerSelecttion} beats ${playerSelection}`;
        compScrBrd.innerText = `Computer Score: ${compScore += 1}`;
    }
    else if(computerSelecttion == 'rock' && playerSelection == 'scissors'){
        roundResult.innerText = `You lost! ${computerSelecttion} beats ${computerSelecttion}`;
        compScrBrd.innerText = `Computer Score: ${compScore += 1}`;
    }
}

function checkForWinner(plyrScr, comScr) {
    if (playerScore === 5) {
        gameWinner.innerText = `Congratulations! You won ${playerScore} to ${compScore}`;
        restrtGame.innerText = `Hit [F5] to restart the game`
        
        buttons.forEach(btn =>{
            btn.disabled = true;
        })
    } else if (compScore === 5) {
        gameWinner.innerText = `Ahh! You Lost to Computer ${compScore} to ${playerScore}`;
        restrtGame.innerText = `Hit [F5] to restart the game`;
       
        buttons.forEach(btn =>{
            btn.disabled = true;
        })
    }
}
