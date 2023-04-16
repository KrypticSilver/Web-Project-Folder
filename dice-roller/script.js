function rollDice() {
  var num1 = Math.floor(Math.random() * 5) + 1;
  var num2 = Math.floor(Math.random() * 5) + 1;

  if (num1 == 1) {
    document.getElementById("dice-1").src="dice-roller/assets/dice-1.png";
  } else if (num1 == 2) {
    document.getElementById("dice-1").src="dice-roller/assets/dice-2.png";
    
  } else if (num1 == 3) {
    document.getElementById("dice-1").src="dice-roller/assets/dice-3.png";
    
  } else if (num1 == 4) {
    document.getElementById("dice-1").src="dice-roller/assets/dice-4.png";
    
  } else if (num1 == 5) {
    document.getElementById("dice-1").src="dice-roller/assets/dice-5.png";
    
  } else if (num1 == 6) {
    document.getElementById("dice-1").src="dice-roller/assets/dice-6.png";
    
  } else {
    console.log("exception");
    console.log(num1);
  }

  if (num2 == 1) {
    document.getElementById("dice-2").src="dice-roller/assets/dice-1.png";
  } else if (num2 == 2) {
    document.getElementById("dice-2").src="dice-roller/assets/dice-2.png";
    
  } else if (num2 == 3) {
    document.getElementById("dice-2").src="dice-roller/assets/dice-3.png";
    
  } else if (num2 == 4) {
    document.getElementById("dice-2").src="dice-roller/assets/dice-4.png";
    
  } else if (num2 == 5) {
    document.getElementById("dice-2").src="dice-roller/assets/dice-5.png";
    
  } else if (num2 == 6) {
    document.getElementById("dice-2").src="dice-roller/assets/dice-6.png";
  } else {
    console.log("exception");
    console.log(num2);
  }
  
}

