import { 
    logout, 
    checkAuth,
    getGames,
    createGame,
    deleteGame
} from '../fetch-utils.js';
import { renderGame } from '../render-utils.js';

const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');
const logoutButton = document.getElementById('logout');

const nameForm = document.getElementById('name-form');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');

checkAuth();

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

nameForm.addEventListener('submit', (e) => {
    // don't forget to prevent the default form behavior!
    e.preventDefault();
    // get the name data from the form
    const data = new FormData(nameForm);
    // set the state to this data from the form
    name1 = data.get('team-one');
    name2 = data.get('team-two');
    // reset the form values
    nameForm.reset();
    displayCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {
    // increment the current state for team one's score
    score1++;
    displayCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {
    // increment the current state for team two's score
    score2++;
    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    // decrement the current state for team one's score
    score1--;
    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    // decrement the current state for team two's score
    score2--;
    displayCurrentGameEl();
});

finishGameButton.addEventListener('click', async() => {
    // create a new game using the current game state
    const game = { name1:name1, name2:name2, score1:score1, score2:score2 };
    await createGame(game);
    // after creating this new game, re-fetch the games to get the updated state and display them (hint: call displayAllGames())
    displayAllGames();
    name1 = '';
    name2 = '';
    score1 = 0;
    score2 = 0;
    teamOneLabel.textContent = 'Team One';
    teamTwoLabel.textContent = 'Team Two';
    currentGameEl.textContent = '';
    disableButtons();
});

logoutButton.addEventListener('click', () => {
    logout();
});

 // on load . . .
window.addEventListener('load', async() => {
    // display all past games (hint: call displayAllGames())
    displayAllGames();
});


function displayCurrentGameEl() {
    // clear out the current game div
    currentGameEl.textContent = '';
    // change the label to show team one's name;
    // change the label to show team two's name;
    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;
    // call the render game function to create a game element
    const game = { name1:name1, name2:name2, score1:score1, score2:score2 };
    const newGame = renderGame(game);
    // append the element to the cleared out current game div
    currentGameEl.append(newGame);
    disableButtons();
}


async function displayAllGames() {
    // clear out the past games list in the DOM
    pastGamesEl.textContent = '';
    // FETCH ALL GAMES from supabase
    const allGames = await getGames();
    // loop through the past games 
    // render and append a past game for each past game in state
    for (let game of allGames) {
        const gameDiv = renderGame(game);
        gameDiv.addEventListener('click', async() => {
            // const editableGameDiv = renderEditableGame(game);
            await deleteGame(game);
            displayAllGames();
            // pastGamesEl.append(editableGameDiv);
            // const editForm = document.getElementById('edit-form');
            // editForm.addEventListener('submit', async(e) => {
            //     e.preventDefault();
            //     const data = new FormData(editForm);
            //     name1 = data.get('edit-team-one-name');
            //     name2 = data.get('edit-team-two-name');
            //     score1 = data.get('edit-team-one-score');
            //     score2 = data.get('edit-team-two-score');
            //     const editedGame = { name1:name1, name2:name2, score1:score1, score2:score2 };
            //     await createGame(editedGame);
            //     displayAllGames();
            // });
        });
        pastGamesEl.append(gameDiv);
    }
}

function disableButtons() {
    if (currentGameEl.textContent === '') {
        teamOneAddButton.disabled = true;
        teamOneSubtractButton.disabled = true;
        teamTwoAddButton.disabled = true;
        teamTwoSubtractButton.disabled = true;
        finishGameButton.disabled = true;
    } else {
        teamOneAddButton.disabled = false;
        teamOneSubtractButton.disabled = false;
        teamTwoAddButton.disabled = false;
        teamTwoSubtractButton.disabled = false;
        finishGameButton.disabled = false;
    }
}

disableButtons();