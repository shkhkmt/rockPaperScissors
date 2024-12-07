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

OBTAIN input from the user 
compare input to saved variables. 
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

#### Logic to store the winner of a round and increment.

If You win! humanChoice beats computerChoice !
    
