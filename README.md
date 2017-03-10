# WDI Project 1: Whack-A-Trump

##Overview
I built Whack-A-Trump (WAT), a whack-a-mole style game with a 2016 US-election twist, as my first project for the 12-week Web Development Immersive course at General Assembly in London. It was built using basic HTML, CSS and JavaScript/jQuery.

The game can be played here: [Whack-A-Trump](https://whack-a-trump.herokuapp.com/).

##How to Play
WAT is modelled on the classic arcade game, Whack-A-Mole. 

###Rules
<ul>
<li>Hit Donald Trump and earn 10 points.</li>
<li>Hit Hillary Clinton and lose 10 points.</li>
<li>Hit Barack Obama and lose 1 life but gain 5 more seconds of play.</li>
</ul>

Finish each round with spare seconds and points to move onto the next level, where the speed increases.

##Code Overview
I built this game using OOP. I began by composing pseudo-code for the basic game and any bonus features I'd like to include, such as levels and additional characters.

The first function includes a callback function that creates the game grid on the page, meaning that I actually used very little HTML and CSS in the build of the game. Once the player hits the "play" button, another function displays the various characters in a random order using Math.random. The game is programmed to display Trump more often than Clinton and Obama. Because it's a game, there are functions for keeping score and timings.

##Successes
A few of my successes include:

<ul>
<li>A timer function that counts down the clock, alerts the user when time is up
Challenges
Next Steps


