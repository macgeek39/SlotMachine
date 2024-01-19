// Despot some money
// Determine number of lines to bet on
// Collect a bet amount
// Spin the slot machine
// Check if the user won
// give the user their winnings
// play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
      const depositAmount = prompt("Enter a deposit amount: ");
      const numberDepositAmount = parseFloat(depositAmount);
  
      if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
      } else {
        return numberDepositAmount;
      }
    }
  };
deposit();
