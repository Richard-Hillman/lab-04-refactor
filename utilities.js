const result = document.querySelector('#what-happened');


// ----------------------------------------------------------------


export function randomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);

    let computerChose;

    if (randomNumber === 1) {
        computerChose = 'rock';
    }

    else if (randomNumber === 2) { 
        computerChose = 'paper';
    }

    else if (randomNumber === 3) {
        computerChose = 'scissors';
    }

    return computerChose;
} 


// ------------------------------------------------------------------


export function doesUserWin(userPick, computerPick) {

    if (userPick === computerPick) {
        return 'Tie';

        // result.textContent = "TIED";
    }

    

// user picks rock-------------------------------------
// create parameters for rock winning, drawing and losing
    
    if (userPick === 'rock') {
        if (computerPick === 'scissors') {
            return 'You Win';
        } else {
            return 'You Lose';
        }
    }

// user picks scissors----------------------------------
// create parameters for scissors winning, drawing and losing 

    if (userPick === 'scissors') {
        if (computerPick === 'paper') {
            return 'You Win';
        }
        else {
            return 'You Lose';
        }
    }

// user picks paper ------------------------------------
// create parameters for paper winning, drawing and losing

    if (userPick === 'paper') {
        if (computerPick === 'rock') {
            return 'You Win';
        }
        else {
            return 'You Lose';
        }
    }

}


