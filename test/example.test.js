// IMPORT MODULES under test here:
import { renderGame, renderTeam } from '../render-utils.js';

const test = QUnit.test;

const game = {
    name1: 'Team One',
    name2: 'Team Two',
    score1: 0,
    score2: 0
};

test('tests to see if renderTeam() returns a Node if passed a string and a number as arguments', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam(game.name1, game.score1) instanceof Node;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('tests to see if renderGame() returns a Node if passed an object as an argument', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game) instanceof Node;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
