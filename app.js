// import functions and grab DOM elements
import { doesUserWin, randomThrow } from './utilities.js';



const startButton = document.querySelector('#shoot-button'); 
const winsConverted = document.querySelector('#win-tracker');
const lossesConverted = document.querySelector('#loss-tracker');
const drawsConverted = document.querySelector('#draw-tracker');



// ------------------------------------------------------------------------------------
// initialize state

let wins = 0;
let losses = 0;
let draws = 0;

// EventListener for when button is pressed -------------------------------------------



startButton.addEventListener('click', () => { 

    const currentComputerPick = randomThrow();
    const checkedRadioButton = document.querySelector(':checked');
    const currentUserPick = checkedRadioButton.value;
 
    // ------------------------------------------------------------------------------------
    // set event listeners to update state and DOM
    // If picks are the same they tie. 
 
    doesUserWin(currentUserPick, currentComputerPick)
})




