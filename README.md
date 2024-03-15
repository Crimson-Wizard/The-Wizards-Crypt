# The-Wizards-Crypt  

Link to depolyed site: https://crimson-wizard.github.io/The-Wizards-Crypt/

The Wizards Crypt is a lock picking game where you have to guess the sequence of the buttons to unlock the crypt and move to the next level. As you select the buttons they turn green if they are correct in the sequence or red if they are wrong, as you see green in the sequence you should remember them to help you on your next attempt, you can press the reset button to clear your guess and try again. It's not just a guessing game as you can learn the correct sequence through trial and error. The sequence of the buttons changes with each level and your total guesses tally up showing you how many attempts it has taken you so that next time you play maybe you can get further with less guesses. 

The sequence game is great for brain training as you have to remember the sequences and is also a fun game just to pass sometime. The sequence is randomly generated  so everytime you play is completely different.

![image of responsive design](<readme images/responsieDesign.png>)

## Features

Before i started my development i used wireframes to help build my idea so i could visualise what i was builing.

![image of my desing on wireframes](<readme images/wireframeDesign.png>)

## Existing Features

## The Wizards Crypt logo

![the wizards crypt logo](<readme images/logo.png>)

I wanted this game to have an old school feel to it visually like D'n'D or dungeon scroller games, so i gave it a classic horror type font and the sub heading of "Welcome to the wizards crypt" as if being beckoned in by a dungeon master.

## The Rules Area

![the games rules](<readme images/gameRules.png>)

This section will allow the user to familiarize themselves with the game rule before pressing start and embarking on their adventure into the crypt.

## The Game Area

![the game area](<readme images/gameArea.png>)

- At the top of the game area it displays what crypt you are currently in.
- Next are the buttons representing the pins in a barrel that have to be pushed in sequence for the lock to open. If the button is correct in the sequence it will display green and if incorrect it will display red.
- There is a Reset button if you guess wrong simply pressit and it will clear the buttons for your next attempt.
- There is an Unlock button unlock button that moves you to the next level once all buttons are green. If you have not entered the right amount of buttons it will display "You must select 5 pins" and if your guess is incorrect it will dislay "Incorrect guess try again".
- wrong guess display shows how many guesses you have taken throughout your quest further into the crypt should you wish to come back and try to get further with less guesses.
- Locks picked displays how many locks you have opened.
- Restart button starts a completely new game. The combination of buttons randomly generated so no game is ever the same.

## Future Developments

Ideas to impliment in the future.

- Addtion of creepy dungeon music in the background and audio for the buttons.
- A leader board to see who has gone the furthest with less guesses.
- Add another button/pin for every 10 levels.
- Build game into an app for mobile divices.

## Testing

Throughout the development I have had to test the game extensively to make sure it plays well and any bugs have been fixed. I originally had the game on a life based system but quickly realized that it was far too difficult and left too much of the game to chance (i couldn't get past level 3 without running out of lives) so changed it to tally the guesses for a more fun style of game. After the change in game style i had to play through a lot to check the random sequence was generating new combinations for each level and restarting the game.

One major problem I faced was creating a clear button to clear the users guess but maintain the same level as the game was changing sequence with each wrong answer making the game completely impossible as you couldn't learn the sequence.
So i created the clear button, This then ment you could learn the sequence within a few goes. I then had the big problem, for each time you pressed clear it was doubling and tripling the guess combo aray. I figured out that every time it was adding an event listener so I created a function that shut them off and they initialized for each guess.

![image of incorrect aray duplicating event listeners](<readme images/incorrectAray.png>)

Early on in the development i couldnt get the start button to hide the rules and display the game area. After alot of scrolling thruogh the code i disscovered the start button was a class and not an Id so the get element by id wasnt initiacting. I changed the class to the id and it was working perfectly.

## Validator Testing

- HTML 
After putting my source code throuh W3C validator i had a few issues to fix.

![image of html bugs](<readme images/htmlBugs.png>)

Currently there are no issues with my html code

![image of html passing w3c validator](<readme images/correctHtml.png>)

- CSS
After checking my CSS code with (jigsaw) validator there are no errors.

![image showing no errors in css code](<readme images/correctCss.png>)

-JavaScript
After putting my source code through Jshint validator there where a few unused variables so i removed them and now there are no issues.

![image showing no errors in Js code](<readme images/correctJS.png>)

## Deployment 

The site was deployed using github. THe steps i took to achive this are as follows:

- In the left hand menu i selected pages.
- selected main branch from drop down menu and clicked save.
- Github then displayed a message saying the deployment was successful.

### Credits

- The image for the main background was used from freepik.com artist wirestock on www.pexels.com
- The image used for the door of game area was used from wirestock freepik.com on www.pexels.com
- Code to add style around h1 and h2 fonts -webkit-text-stroke: 3px black; from WWW.kinsta.com
- fonts from google fonts.
- favicon image from fontawesome.
- Fisher-Yates Sorting Algorithm for generating my random combinations.
