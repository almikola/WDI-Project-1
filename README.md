![ga](https://cloud.githubusercontent.com/assets/20629455/23824362/2c9817c2-066d-11e7-8988-7b1eefc6d628.jpg)![wdi](https://cloud.githubusercontent.com/assets/20629455/23824363/2ddeaa7e-066d-11e7-8630-f7c890c9f1c1.png)___<br>#Project 1 | Whack-A-Trump

##Overview
I built Whack-A-Trump (WAT), a whack-a-mole style game with a 2016 US-election twist, as my first project for the 12-week Web Development Immersive course at General Assembly in London. It was built using basic HTML, CSS and JavaScript/jQuery.

The game can be played here: [Whack-A-Trump](https://whack-a-trump.herokuapp.com/).

##How to Play
Whack-A-Trump is modelled on the classic arcade game, Whack-A-Mole. 

###Rules
<ul>
<li>Hit Donald Trump and earn 10 points.</li>
<li>Hit Hillary Clinton and lose 10 points.</li>
<li>Hit Barack Obama and lose 1 life but gain 5 more seconds of play.</li>
</ul>

Finish each round with spare seconds and points to move onto the next level, where the speed increases.

##The Build
Whack-A-Trump is a in-browser game created using jQuery, JavaScript, HTML and CSS. It is designed using Object Orientated Programming.

##The Process
I began by composing pseudo-code for the basic game and any bonus features I'd like to include, such as levels and additional characters.

The first function includes a callback function that creates the game grid on the page, meaning that I actually used very little HTML and CSS in the build of the game. The various characters were modelled using an array. 

Once the player hits the "play" button, a callback function displays the characters in a random order using Math.random. The game is programmed to display Trump more often than Clinton and Obama. There are functions for keeping score based on click events and a count down timer. This was my MVP.

Once I reached the point of MVP in my game, I then added a feature that played soundbites from the politicians at random intervals. I also added levels to the game, where when a player finished the game with points and seconds to spare, he would move on to the next level, where the speed would increase. Finally, there is a function that resets the game when the player moves on to the next level.

##Key Challenges / Learnings

- Figuring out how to add another level to the game was a challenge, but after collaborating with my classmates, I was able to come up with a working solution.

- This app helped me to better understand OPP.

##Future work

- I would love to make this game more animated and interactive.

- I would like to increase the size of the grid as the levels increase. 


