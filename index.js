
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var numberOfRolls = 0;

function updateScore(winner) {
  if (winner === "player1") {
    scorePlayer1++;
    numberOfRolls++;
    document.getElementById("scorePlayer1").textContent = scorePlayer1;
    document.getElementById("numberOfRolls").textContent = numberOfRolls;
  } else if (winner === "player2") {
    scorePlayer2++;
    numberOfRolls++;
    document.getElementById("scorePlayer2").textContent = scorePlayer2;
    document.getElementById("numberOfRolls").textContent = numberOfRolls;
  }
}

// Select the button and the dice images
const rollButton = document.querySelector('.roll-btn');
const diceImages = document.querySelectorAll('img');

// Add event listener to the roll button
rollButton.addEventListener('click', () => {
  // Add the "rolling" class to both dice images to start the animation
  diceImages.forEach(image => {
    image.classList.add('rolling');
  });

  // Optionally remove the "rolling" class after the animation ends (1 second)
  setTimeout(() => {
    diceImages.forEach(image => {
      image.classList.remove('rolling');
    });
  }, 1000);  // 1s to match the animation duration
});


//var rollButton = document.querySelector(".roll-btn");
   rollButton.addEventListener("click", function() {
     rollDice();
   });

   function rollDice() {
     var randomNumber1 = Math.floor(Math.random() * 6) + 1;
     var randomDiceImage = "dice" + randomNumber1 + ".png";
     var randomImageSource = "images/" + randomDiceImage;
     document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

     var randomNumber2 = Math.floor(Math.random() * 6) + 1;
     var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
     document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

     if (randomNumber1 > randomNumber2) {
       document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
       updateScore("player1");
     } else if (randomNumber2 > randomNumber1) {
       document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
       updateScore("player2");
     } else {
       document.querySelector("h1").textContent = "Draw!";
       numberOfRolls++;
       document.getElementById("numberOfRolls").textContent = numberOfRolls;
     }
   }

