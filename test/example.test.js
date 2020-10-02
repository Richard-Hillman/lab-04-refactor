// IMPORT MODULES under test here:
import { randomThrow, doesUserWin } from '../utilities.js';

// import { example } from '../example.js';

const test = QUnit.test;




test('if computert input is rock and user input is scissors return lose', (expect) => {
    const userInput = 'scissors';
    const compInput = 'rock';

    const expected = 'you lose';
    const actual = doesUserWin(userInput, compInput);

    expect.equal(actual, expected);
})

test('if computer input is the same as user input we want it to return tie', (expect) => {
    const userInput = 'rock';
    const compInput = 'rock';

    const expected = 'tie';
    const actual = doesUserWin(userInput, compInput);

    expect.equal(actual, expected);
})













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

