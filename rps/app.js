const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  let ComputerChoice = choices[choice];
  return ComputerChoice;
  //   console.log(ComputerChoice);
};

// getComputerChoice();

const play = (user) => {
  user = user.toLowerCase();
  const cpu = getComputerChoice();
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

console.log(play("rock"));
