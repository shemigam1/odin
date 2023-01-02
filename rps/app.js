const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  let ComputerChoice = choices[choice];
  return ComputerChoice;
  //   console.log(ComputerChoice);
};

// getComputerChoice();

userChoice = prompt("rock, paper or scissors? ");

// const cpu = getComputerChoice();
const play = (user, cpu) => {
  user = user.toLowerCase();
  //   console.log(cpu);
  if (user == cpu) {
    return "Its a draw";
  } else if (user == "rock" && cpu == "scissors") {
    return "User wins: 1 point";
  } else if (user == "scissors" && cpu == "rock") {
    return "Cpu wins: 1 point";
  } else if (user == "rock" && cpu == "paper") {
    return "Cpu wins: 1 point";
  } else if (user == "paper" && cpu == "rock") {
    return "User wins: 1 point";
  } else if (user == "paper" && cpu == "scissors") {
    return "Cpu wins: 1 point";
  } else if (user == "scissors" && cpu == "paper") {
    return "User wins: 1 point";
  }
};

// play(userChoice, getComputerChoice);
// console.log(play(userChoice));

const game = (rounds) => {
  let userScore = 0;
  let cpuScore = 0;
  let draws = 0;
  play(userChoice, getComputerChoice());
  for (let i = 0; i < rounds; i++) {
    if (play(userChoice, getComputerChoice()) == "User wins: 1 point") {
      userScore++;
    } else if (play(userChoice, getComputerChoice()) == "Its a draw") {
      draws++;
    } else {
      cpuScore++;
    }
  }

  if (userScore > cpuScore) {
    console.log(`User wins: by ${userScore - cpuScore} points`);
  } else {
    console.log(`Cpu wins: by ${cpuScore - userScore} points`);
  }

  console.log(`User: ${userScore}`);
  console.log(`Cpu: ${cpuScore}`);
};

game(3);
