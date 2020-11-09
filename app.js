

const game = { // <-- object with game data 
    title: 'Guess the Number!',
    biggestNum: 10,
    smallestNum: 1,
    secretNum: null,
    userGuess: function () {
        let userGuess = NaN
    while (isNaN(userGuess) || userGuess > this.biggestNum || userGuess < this.smallestNum ) {
     userGuess = parseInt(prompt(`guess a number between ${this.smallestNum} to ${this.biggestNum}`));
    
    } 
    return userGuess

},
    prevGuesses: [],
    play: function() {
        let userGuess = NaN;
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
     while (userGuess != this.secretNum ) {
         userGuess = this.userGuess();
         this.prevGuesses.push(userGuess);
         this.displayToUser(userGuess);
     }
      return; 
     
    },
    displayToUser: function (userGuess) {
        let msg = null;
        if (userGuess == this.secretNum)
        msg = `congrats you got the answer ! `;
        else { 
            if (userGuess > this.secretNum) {
             msg = `too high! `;
            } else {
               msg = `Too low ! `;
            }
      
           msg = `${msg} Previous guesses: ${this.prevGuesses.join(', ')}`;
           
        }
        alert(msg);
    }
    


  };
  game.play();

  // game doesnt run in node but works in browser 

  



  



