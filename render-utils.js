export function renderGame(game) {
    const div = document.createElement('div');
    const team1Div = renderTeam(game.name1, game.score1);
    const team2Div = renderTeam(game.name2, game.score2);

    div.append(team1Div, team2Div);

    div.classList.add('game');

    return div;
}

export function renderTeam(name, score) {
    const teamDiv = document.createElement('div');
    const nameDiv = document.createElement('p');
    const scoreDiv = document.createElement('p');

    teamDiv.classList.add('team');
    nameDiv.classList.add('name');
    scoreDiv.classList.add('score');

    nameDiv.textContent = name;
    scoreDiv.textContent = score;

    teamDiv.append(nameDiv, scoreDiv);

    return teamDiv;
}

// export function renderEditableGame(game) {
//     const div = document.createElement('div');
//     const editForm = document.createElement('form');
//     const team1Div = renderEditableTeamOne(game.name1, game.score1);
//     const team2Div = renderEditableTeamTwo(game.name2, game.score2);


//     editForm.setAttribute('id', 'edit-form');
//     editForm.append(team1Div, team2Div);
//     div.append(editForm);

//     div.classList.add('game');

//     return div;
// }

// export function renderEditableTeamOne(name, score) {
//     const teamDiv = document.createElement('div');
//     const nameDiv = document.createElement('p');
//     const nameInput = document.createElement('input');
//     const scoreDiv = document.createElement('p');
//     const scoreInput = document.createElement('input');

//     teamDiv.classList.add('team');
//     nameDiv.classList.add('name');
//     scoreDiv.classList.add('score');
//     nameInput.classList.add('edit');
//     scoreInput.classList.add('edit');
//     nameInput.setAttribute('name', 'edit-team-one-name');
//     scoreInput.setAttribute('name', 'edit-team-one-score');


//     nameInput.value = name;
//     scoreInput.value = score;

//     nameDiv.append(nameInput);
//     scoreDiv.append(scoreInput);

//     teamDiv.append(nameDiv, scoreDiv);

//     return teamDiv;
// }

// export function renderEditableTeamTwo(name, score) {
//     const teamDiv = document.createElement('div');
//     const nameDiv = document.createElement('p');
//     const nameInput = document.createElement('input');
//     const scoreDiv = document.createElement('p');
//     const scoreInput = document.createElement('input');

//     teamDiv.classList.add('team');
//     nameDiv.classList.add('name');
//     scoreDiv.classList.add('score');
//     nameInput.classList.add('edit');
//     scoreInput.classList.add('edit');
//     nameInput.setAttribute('name', 'edit-team-two-name');
//     scoreInput.setAttribute('name', 'edit-team-two-score');


//     nameInput.value = name;
//     scoreInput.value = score;

//     nameDiv.append(nameInput);
//     scoreDiv.append(scoreInput);

//     teamDiv.append(nameDiv, scoreDiv);

//     return teamDiv;
// }