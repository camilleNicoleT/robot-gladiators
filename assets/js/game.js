var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//in the For loop add an If else function with a window alert asking if they'd like to play again
//then ask if they'd like to up their health by visiting the shop
//

var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
    while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
      
    if (promptFight === "skip" || promptFight === "SKIP") {
         // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          
         // if yes (true), leave fight
      if (confirmSkip) {
         window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
         break;
   }
 } 
          // remove enemy's health by subtracting the amount set in the playerAttack variable
          enemyHealth = enemyHealth - playerAttack;
          console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
          );
    
        // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                
        // award player money for winning
        playerMoney = playerMoney + 20;
       
        // leave while() loop since enemy is dead
        break;
        } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
            // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
         enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
       }
    };

//function to start a new game
var startGame = function() {
for (var i = 0; i < enemyNames.length; i++) {
     // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i +1));
        //pick new enemy to fight based ont he index of the enemyNames
        var pickedEnemyName = enemyNames[i];
        //reset enemyHealth before starting new fight
        enemyHealth = 50;
        //use debugger to pause script from runnign and check what's wrong
        //debugger;
        //Pass the pickedEnemyName variable's value into the fight function
        fight(pickedEnemyName);
    } 
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }
// after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

//function to end the entire game
var endGame = function() {
    debugger;
    //if player is still alive, playerwins
    if (playerHealth > 0) {
        window.alert ("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
    window.alert("The game has now ended. Let's see how you did!");
    }
//ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    //restart the game
    startGame();
} else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};
// start the game when the page loads
startGame();