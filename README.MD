## Psuedocode 

### Logic to get computer choice 

Generate random number between 0 and 1 
IF the number is less than 1/3, 
    RETURN rock 
IF the number is more than 1/3 but less than 2/3, 
    RETURN paper
IF the number is more than 2/3, 
    RETURN scissors

### Logic to get the human Choice 

GET input from the user 
Compare input to saved variables. 
store input to variable 

### Logic to play a single round 

GET the computer's choice 
GET the human choice.
convert human choice into lower-case

CASE
1)
IF computer choice is Rock & human choice is Paper
	RETURN You win! humanChoice beats computerChoice ! 
ELSE IF computer choice is Rock & human choice is Scissor
	RETURN You lose! computerChoice beats humanChoice !
2)
ELSE IF computer choice is Paper & human choice is Rock 
	RETURN You win! humanChoice beats computerChoice ! 
ELSE IF computer choice is Paper & human choice is Scissor
	RETURN You lose! computerChoice beats humanChoice !
3)
ELSE IF computer choice is Scissor & human choice is Paper 
	RETURN You win! humanChoice beats computerChoice ! 
ELSE IF computer choice is Scissor & human choice is Rock
	RETURN You lose! computerChoice beats humanChoice !
ELSE 
	RETURN Draw! Play another round. 


### logic for playing the whole game.

 * LOOP while player score and computer score are both less than 5.
 * SET variables as arguments for function
 * CALL playRound function and set each players choice as an argument
 * return the winner of the round to the user and the current score. 
 * return Round result
 * CASE IF humanScore is equal to 5
 * return 'you Win'
 * ELSE IF computerScore is equal to 5
 * return 'you Lose'


## RPS UI 

1. In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    * For now, remove the logic that plays exactly five rounds.

    * Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

    * Add a div for displaying results and change all of your console.logs into DOM methods.

    * Display the running score, and announce a winner of the game once one player reaches 5 point

    * You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life. 

3. Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the rps-ui branch with git status before continuing.

4.  Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.

    * Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
    
    *  Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
    
    * If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
    
    * Let’s push our main branch into our remote repo by running git push origin main . Go to your GitHub repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
    
    * Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push origin --delete rps-ui. Congrats, we’re all done with our cleanup!

5. Make sure to publish the project on GitHub Pages and add a live preview link in the project lesson.

Pseudocode 

Remove logic to play five rounds. 
Create button .choice
Add event listener for each button that calls playRound() with the correct
selection. 
Create div .content #result and change all the console.logs into DOM methods. 
Display runnning score and announce a winner when a player reaches 5 points.  
