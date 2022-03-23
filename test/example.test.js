// IMPORT MODULES under test here:
import { renderGame, renderTeam } from '../render-utils.js';

const test = QUnit.test;

test('tests to see if renderTeam() returns a div element if passed a string and a number as arguments', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const game = {
        name1: 'Team One',
        name2: 'Team Two',
        score1: 4,
        score2: 3
    };

    const expected1 = game.name1;
    const expected2 = game.score1;
    const expected3 = game.name2;
    const expected4 = game.score2;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = renderTeam(game.name1, game.score1).firstChild.textContent;
    const actual2 = renderTeam(game.name1, game.score1).lastChild.textContent;
    const actual3 = renderTeam(game.name2, game.score2).firstChild.textContent;
    const actual4 = renderTeam(game.name2, game.score2).lastChild.textContent;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual1, expected1);
    expect.deepEqual(Number(actual2), expected2);
    expect.deepEqual(actual3, expected3);
    expect.deepEqual(Number(actual4), expected4);
});

test('tests to see if renderGame() returns a div element if passed an object as an argument', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const game = {
        name1: 'Team One',
        name2: 'Team Two',
        score1: 3,
        score2: 1
    };

    const expected1 = game.name1;
    const expected2 = game.score1;
    const expected3 = game.name2;
    const expected4 = game.score2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = renderGame(game).firstChild.firstChild.textContent;
    const actual2 = renderGame(game).firstChild.lastChild.textContent;
    const actual3 = renderGame(game).lastChild.firstChild.textContent;
    const actual4 = renderGame(game).lastChild.lastChild.textContent;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual1, expected1);
    expect.deepEqual(Number(actual2), expected2);
    expect.deepEqual(actual3, expected3);
    expect.deepEqual(Number(actual4), expected4);
});
