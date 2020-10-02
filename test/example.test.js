// IMPORT MODULES under test here:
import { randomThrow, doesUserWin } from '../utilities.js';

// import { example } from '../example.js';

const test = QUnit.test;


//  SCISSORS TESTS ==========================================================================================================

test('if computer input scissors and user input is rock return win', (expect) => {
    const userInput = 'rock';
    const compInput = 'scissors';

    const expected = 'You Win';
    const actual = doesUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

test('if computer input scissors and user input is paper return lose', (expect) => {
    const userInput = 'paper';
    const compInput = 'scissors';

    const expected = 'You Lose';
    const actual = doesUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

// PAPER TESTS =============================================================================================================

test('if computer input paper and user input is scissors return win', (expect) => {
    const userInput = 'scissors';
    const compInput = 'paper';

    const expected = 'You Win';
    const actual = doesUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

test('if computer input paper and user input is rock return lose', (expect) => {
    const userInput = 'rock';
    const compInput = 'paper';

    const expected = 'You Lose';
    const actual = doesUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

// ROCK TESTS =============================================================================================================

test('if computer input is rock and user input is paper return win', (expect) => {
    const userInput = 'paper';
    const compInput = 'rock';

    const expected = 'You Win';
    const actual = doesUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

test('if computer input is rock and user input is scissors return lose', (expect) => {
    const userInput = 'scissors';
    const compInput = 'rock';

    const expected = 'You Lose';
    const actual = doesUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

// DRAW TEST ===============================================================================================================

test('if computer input is the same as user input we want it to return tie', (expect) => {
    const userInput = 'rock';
    const compInput = 'rock';

    const expected = 'Tie';
    const actual = doesUserWin(userInput, compInput);

    expect.equal(actual, expected);
});

// RANDOM NUMBER ROCK PAPER SCISSORS FUNCTION ================================================================================

test('should randomly return rock, paper, scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = randomThrow();
    
    expect.equal(typeof actual, 'string');

    //Expect
    // Make assertions about what is expected versus the actual result

});

