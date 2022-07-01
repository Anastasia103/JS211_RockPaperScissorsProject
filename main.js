let hand2 = ""
let hand1 = ""

function updatedHandle1() {
  hand1 = document.getElementById("handle1").value

  console.log(hand1)
}
function updatedHandle2() {
  hand2 = document.getElementById("handle2").value

  console.log(hand2)
}
// the function that will be called by the unit test below
const rockPaperScissors = () => { 
let userOne = hand1.toLowerCase().trim()
let userTwo = hand2.toLowerCase().trim()


if (userOne === 'scissors' && userTwo ==='scissors' ||
    userOne === 'rock' && userTwo ==='rock' || 
    userOne === 'paper' && userTwo ==='paper')
    {
      document.getElementById("whoWins").innerHTML = ("It's a tie!") 
      console.log("It's a tie!")
}
 else if (userOne === 'rock' && userTwo ==='scissors' ||
          userOne === 'scissors' && userTwo === 'paper' ||
          userOne === 'paper' && userTwo ==='rock')
         
          {
   document.getElementById("whoWins").innerHTML = ("Hand one wins!")     
   console.log("Hand one wins!")  
          }
  else if (userTwo === 'rock' && userOne ==='scissors' ||
           userTwo === 'scissors' && userOne === 'paper' ||
           userTwo === 'paper' && userOne ==='rock')
          {
  document.getElementById("whoWins").innerHTML = ("Hand two wins!") 
  console.log("Hand two wins!")         
          }
else {
  document.getElementById("whoWins").innerHTML = ("Invalid arguements must enter rock, paper or scissors") 
  console.log("Invalid Arguments")   
}

};

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C

