// import functions and grab DOM elements
import { doesUserWin, randomThrow } from './utilities.js';



const startButton = document.querySelector('#shoot-button'); 
const winsConverted = document.querySelector('#win-tracker');
const lossesConverted = document.querySelector('#loss-tracker');
const drawsConverted = document.querySelector('#draw-tracker');
const gameResult = document.querySelector('#what-happened');
const resetButton = document.querySelector('#reset');


// ------------------------------------------------------------------------------------
// initialize state

let wins = 0;
let losses = 0;
let draws = 0;

// EventListener for when button is pressed -------------------------------------------



startButton.addEventListener('click', () => { 

    
    const currentComputerPick = randomThrow();
    console.log(currentComputerPick);
    const checkedRadioButton = document.querySelector(':checked');
    const currentUserPick = checkedRadioButton.value;
    console.log(currentUserPick);
    
    const gameOutcome = doesUserWin(currentUserPick, currentComputerPick);
    console.log(gameOutcome);
    // doesUserWin(currentUserPick, currentComputerPick);
  
    // ------------------------------------------------------------------------------------
    // set event listeners to update state and DOM
    // If picks are the same they tie. 
 
    if (gameOutcome === 'Tie'){
        draws++;
        drawsConverted.textContent = draws;
        gameResult.textContent = 'You tied!';
    }
    
    if (gameOutcome === 'You Win'){
            wins++;
            winsConverted.textContent = wins;
            gameResult.textContent = 'You won!';
        }
    
    if (gameOutcome === 'You Lose'){
                losses++;
                lossesConverted.textContent = losses;
                gameResult.textContent = 'You lost!';
        }
    })

resetButton.addEventListener('click', () => {
    let wins = 0;
    let losses = 0;
    let draws = 0;
    winsConverted.textContent = 0;
    lossesConverted.textContent = 0;
    drawsConverted.textContent = 0;
    gameResult.textContent = '';
})





