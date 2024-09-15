//CALVIN CODE
// Define the variables and game modes

var nameMode1 = "Input Player 1 Name";
var nameMode2 = "Input Player 2 Name";
var selectMode1 = "Select dice order for P1";
var selectMode2 = "Select dice order for P2";
var resultMode = "See outcome and reset game";
var user1score = "";
var user2score = "";

var rollDice = function () {
  //produce random number from 0 - 5.999
  var randomDecimal = Math.random() * 6;
  //Makes the number into a integer
  var randomDice = Math.ceil(randomDecimal);
  return randomDice;
};
// assigning dice rolls to the individual rolls
var rndDice1 = "";
var rndDice2 = "";
var rndDice3 = "";
var rndDice4 = "";

// to records player name
var gameMode = nameMode1;

var main = function (input) {
  var myOutputValue = "";
  // to record player 1 name
  if (gameMode == nameMode1) {
    rndDice1 = rollDice();
    rndDice2 = rollDice();
    if (!input) return "Please insert Player 1 Name";
    else userName1 = input;
    gameMode = selectMode1;
    return (myOutputValue =
      "Hello " +
      userName1 +
      "! <br><br>Please select the order for " +
      rndDice1 +
      " and " +
      rndDice2 +
      ".");
  }
  //for player1 to select order of dice rolled
  if (gameMode == selectMode1) {
    var user1input = Number(input);
    if (user1input === 1) {
      user1score = Number(String(rndDice1) + String(rndDice2));
      gameMode = nameMode2;
    }
    if (user1input === 2) {
      user1score = Number(String(rndDice2) + String(rndDice1));
      gameMode = nameMode2;
    }
    return (
      "Your score " +
      user1score +
      " has been recorded. <br> Please key in Player 2 Name"
    );
  }
  // Player 2 name records
  if (gameMode == nameMode2) {
    rndDice3 = rollDice();
    rndDice4 = rollDice();
    if (!input) return "Please insert Player 2 Name";
    else userName2 = input;
    gameMode = selectMode2;
    return (myOutputValue =
      "Hello " +
      userName2 +
      "! <br><br> Please select the order for " +
      rndDice3 +
      " and " +
      rndDice4 +
      ".");
  }
  if (gameMode == selectMode2) {
    var user2input = Number(input);
    if (user2input === 1) {
      gameMode = resultMode;
      user2score = Number(String(rndDice3) + String(rndDice4));
    }
    if (user2input === 2) {
      gameMode = resultMode;
      user2score = Number(String(rndDice4) + String(rndDice3));
    }
    return (
      "Your score " +
      user2score +
      " has been recorded. <br><br> Please click submit to see results"
    );
  }
  if ((gameMode = resultMode)) {
    if (Number(user1score) > Number(user2score)) {
      gameMode = nameMode1;

      return (
        userName1 +
        " wins! <br> The winning score is " +
        user1score +
        " versus " +
        userName2 +
        "'s score of " +
        user2score +
        "<br><br> Click submit to restart the game"
      );
    }
    if (Number(user2score) > Number(user1score)) {
      gameMode = nameMode1;
      return (
        userName2 +
        " wins! <br> The winning score is " +
        user2score +
        " versus " +
        userName1 +
        "'s score of " +
        user1score +
        "<br><br> Click submit to restart the game"
      );
    } else gameMode = nameMode1;
    return (
      "It's a draw! " +
      userName1 +
      ": " +
      user1score +
      ". " +
      userName2 +
      ": " +
      user2score +
      "." +
      "<br><br> Click submit to restart the game"
    );
  }
};

// Base
// Requirements
// There are 2 players and players take turns.

// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.

// The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.

// After both players have rolled and chosen dice order, the player with the higher combined number wins.

// Example
// Player 1 rolls 2 dice with dice rolls 3 for Dice 1 and 6 for Dice 2.

// Copy
// Welcome Player 1.
// You rolled 3 for Dice 1 and 6 for Dice 2.
// Choose the order of the dice.
// Player 1 can pick either Dice 1 or Dice 2 as the first numeral of the combined number.

// Copy
// Player 1, you chose Dice 2 first.
// Your number is 63.
// It is now Player 2's turn.
// Player 1 picked Dice 2 as the 1st numeral and Dice 1 as the 2nd, thus generating the combined number 63. Player 2 then rolls 2 dice and tries to generate a number greater than 63.
