let score = JSON.parse(localStorage.getItem('score')) ||{
        win: 0,
        loss: 0,
        tie: 0
      };

      updateScoreElement();

      let isAutoPlaying = false;
      let intervalId;
      function autoPlay(){
        if(!isAutoPlaying){
          intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000);
          isAutoPlaying = true;
        } else {
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
          
        }

        document.querySelector('.move-button-rock').addEventListener('click', () => {
          playGame('rock');
        });

        document.querySelector('.move-button-paper').addEventListener('click', () => {
          playGame('paper');
        });

        document.querySelector('.move-button-scissors').addEventListener('click', () => {
          playGame('scissors');
        });

        document.body.addEventListener('keydown', (event) => {
           if(event.key === 'r'){
            playGame('rock');
           } else if(event.key === 'p'){
            playGame('paper');
           } else if(event.key === 's'){
            playGame('scissors');
           }
        });

      function playGame(playerMove){ 
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {

          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }
        }
        
        if (playerMove === 'rock') {
          if (computerMove === 'scissors') {
            result = 'You win.';
          } else if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          }
          
        }

        if (playerMove === 'paper') {
         if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          } else if (computerMove === 'rock') {
            result = 'You win.';
          }
        }
        
        if(result === 'You win.'){
          score.win += 1;
        } else if (result === 'You lose.'){
          score.loss += 1;
        } else if (result === 'Tie.'){
          score.tie += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
      }

        function updateScoreElement(){
          document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.win}. Losses: ${score.loss}. Tie: ${score.tie}`;
        }


        function pickComputerMove(){
            const randomNumber = Math.random();

            if(randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'rock';
            } else if( randomNumber >= 1 / 3 && randomNumber < 2 / 3){
                computerMove = 'paper';
            } else if( randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissors';
            }
            return computerMove;
        }

        