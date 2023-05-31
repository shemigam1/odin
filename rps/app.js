"use strict;";

const computerInput = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.round(Math.random() * 2);

  return options[random];
};

// console.log(computerInput());

const round = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "oops... it was a draw. Play again!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `oops... Computer wins ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `oops... Computer wins ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `oops... Computer wins ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `Hurray! Player wins ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `Hurray! Player wins ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `Hurray! Player wins ${playerSelection} beats ${computerSelection}`;
  }
};

// console.log(round(playerSelection, computerSelection));

const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("choose rock, paper or scissors... ");
    const computerSelection = computerInput();
    console.log(round(playerSelection, computerSelection));
    // round();
  }
};

game();
