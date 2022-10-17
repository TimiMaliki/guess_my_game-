/**
 * Guess My Game project
 */
 'use strict';

//  document.querySelector('.message').textContent = "correct Number!";
//  document.querySelector('.num__box').textContent = 17;
//  document.querySelector('.guess').value = 17;


   // Dom manipulation: I got the highscore and score from the html and gave it a value which will appear on the dom
      document.querySelector('.High__score').textContent = "Highscore:" + 13;
       document.querySelector('.score').textContent = "score:" + 11;


    //Dom manipulation: this is where my secreat number holds in the game
     const number = Math.trunc(Math.random()*20)+1;
      //Dom manipulation: this is the score area which will decrease if the player lose
          let  score = 20;

//
      document.querySelector('.num__box').textContent = "?";

         //reset game
        //  document.querySelector('.again').addEventListener('click', function(){
        //   document.querySelector('.score').textContent = "score:" + 11;
        //   document.querySelector('.num__box').textContent = number
          //  document.querySelector('.message').textContent = "Start Guessing!";
       //  });

      document.querySelector('.check__box').addEventListener('click', function(){
       const guess = Number(document.querySelector('.guess').value );



// when the value is 0 or empty
   if(!guess){
     document.querySelector('.message').textContent = "No Number!"
   }


   // when the value is equal to the number
   else if( guess === number){
        document.querySelector('.message').textContent = "correct Number!"

        //the background body change when the value is  equal to the number
        document.querySelector('body').style.backgroundColor = "#60b347"
        document.querySelector('.num__box').textContent = number
   }


   // when the value is higher than the value
   else if( guess > number){
    if( score > 1){
      document.querySelector('.message').textContent = "Too High!"
      // the score decreases when then the value is high
     score--;
         document.querySelector('.score').textContent = "score:" + score
    }else{
      document.querySelector('.message').textContent = "You Lost The Game!"
      document.querySelector('.score').textContent = 0
    }
   }


   // when the value is less than the number
   else if( guess < number){
    if( score > 1){
      document.querySelector('.message').textContent = "Too Low!"
     score--;
         document.querySelector('.score').textContent = "score:" + score
    }else{
      document.querySelector('.message').textContent = "You Lost The Game!"
      document.querySelector('.score').textContent = 0
    }
  }
 });