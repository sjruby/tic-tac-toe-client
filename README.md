[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Tic Tac Toe Project

The primary goals of this project are to:
1. Use a tic-tac-toe game egine written by myself
2. Render the game board in a browser
3. Switch turns as the user clicks through
4. Visually display the outcome of the game
5. Interact with the GA Game API to update game staus
6. Pull out game stats from the game API
7. Have login/logout/change pass word functionality.

Link to game:https: //sjruby.github.io/tic-tac-toe-client/

##Technologies used:
  Ajax to interact with the bakend serve
  jQuery to manipulate the DOM to communicate with the user/ mointor user clicks
  Javascript to determine when user has won or lost a game/ calculate game stats
  HTML/Bootstrap CSS to make rejder the game baord.

## User Stories
1. As a tic-tac-toe expert, I want the page to tell me if O or X won
2. As a site user, I want to track my wins/losses/draws
3. As a site user, I want to be able to login/out/change my PW
4. As a tic-tac-toe player, I want the game to automatically switch turns
5. As a user, I want to be able to start a new game whenever I want.


## Final Wirefram
The final wire frame, that includes the hide/show flow when users click on buttons:
[Imgur](http://i.imgur.com/xI9FAaw.jpg)

## Approach to Building the App
I broke it down the requirements three high level tasks with sub tasks under that:
  1. Interact with the API/jQuery text Updates
  - Authorization events(sign in/up log out)
  - Create a new game
  - Game status events(updated the cells array) and game over value
  - Pull list of games
  - Make simple jQUERY .text() updates.  NOTHING FANCY

  2. Interact with the tic-tac-toe board
  - have the click flip a tile
  - make a function that switches turns
  - make sure user cannot interact with board when game has not started/is not over
  - prevent uer from clicking a square that's been clicked

  3. Gamelogic
  - evaluate a game board for win/loss/cats game
  - update display of game logic

By breaking it down like that I was able to work through the sub-tass in a way that supported
eachother.  First I created the authorization events, second was the new game creation. From there
eachothes. I worked thorugh making the click handler flip picture b/c that woudl help me validitate the API
logic.  Next I worked through the game evaluation logic, using that in combination with the click
made it easier to QC the game logic.  Last API call I worked through was pulling the games
array to support game statistics.  Finally I made sure the user could not click any buttons or the
board except when the buttons would work.

## Pitfalls

There were a couple things that caused me to thrash:

1. images not working on git pages, I ended up using imgur links but took a little over an hour to figure out the picture error of time
2. I made a REALLY dumb mistake, I set up all my API requests using the APP file from the library API which refrenence the local host.  That meant w
when I pushed my site to git hub pages it all busted b/c that API requests where pointing to the wrong place.  It took me a while to figure out
that my team mates where usign a different APP/Config file than myself...DOH.

## Opportunites for Improvment

My code could be a lot simpler, there are places I know I'm repeating my self b/c
I did not have time to split functions(the game win check for the game statistcs
and API call are almost line for line the same).

I want to go through this and double check it against a list of best practices, I know
I'm breaking some like not using camel case in CSS class names

Naming things is hard, right now I know what gameStore.gameStore.games.cells refers
to but that would be annoying to track back in a few months.

## Next Steps

I want to add an AI bot, depending how much time we have to resubmit I may try
to work that out

I want to clean up the display, I don't like the way things look so would like
to put it into a grid and make things resize for moblie.  The site is already
close to mobile ready b/c I made the inital design so simple, would just need
to shrink text of headers and other thigns.
