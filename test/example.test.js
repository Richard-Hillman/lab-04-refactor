// IMPORT MODULES under test here:
import { randomThrow } from '../utilities.js';

// import { example } from '../example.js';

const test = QUnit.test;

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

