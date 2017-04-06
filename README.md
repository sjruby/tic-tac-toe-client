[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic Tac Toe Project

Link to game:
Technologies used:

## Minimum Viable Product

The requirments for the Tic Tac Toe app itself are:

1. Use a tic-tac-toe game egine written by myself
2. Render the game board in a browser
3. Switch turns as the user clicks through
4. Visually display the outcome of the game
5. Have login/logout/change pass word functionality.

## User Stories
1. As a tic-tac-toe expert, I want the game board to declare a winner
2. As a site user, I want to track my wins/losses/draws
3. As a site user, I want to be able to login/out/change my PW
4. As a tic-tac-toe player, I want the game to automatically switch turns
5. As a user, I want to be able to start a new game ONLY when the current one is complete

## Initial Project Plan

Let's assume I don't want to work this weekend, I'm feeling optomistic right now.  I already have written Javascript logic built for the console that evaluates a tic-tac-toe array.  I should be able to refactor that quickly, b/c it is the same general logic. That gives me 3 days to work through all of the other Tic-Tac-Toe requirments.

Day 1: Build out my wire frame for tic-tac-toe app
       Add login/logout/change PW logic
       Click handler to create a new game confirm backend recofnizes game
       STRECH GOAL: Click handler to for the 3x3 grid that updates the game states

Day 2: Finalize click handlers to make sure it is updatesbackend game state
      Deploy site to Git Hub pages
      STRECH GOAL: Transition console game logic to site

Day 3: Finalize game engine logic and deal with the inevitable errors I find in day 1/2

## Day 1 Accomplishments
Finished everything I wanted to for day 1...victory!  The user authentication
stuff works, it is a seris of modle forms.  The new game button works once a user
is loged in, it updates the back end and pulls back a JS object called game
store that I will use to check for win/loss/catsgame. I also have a click handler
that succsfully updates the gamestore object and the back end with X based on
where in the 3x3 grid you click.

## Day 2 Plan
Looking at my inital project plan I WAY under planed for day 2 and some of the
steps necessary for the MVP.  Updated day two plan:

1. Add image flip to the x click handler
2. Merge click handler branch wiht master
3. Spin off a game logic branch
4. Add a turn handler to check game array for WHOSE turn it is
5. Merge game logic back to master banch
6. splin off O click handler branch
7. have the game auto swithc betweent X/O's turns using function from step 4
8. Make sure the image updates based on X/O's turn
9. Merge O click handler back into master branch
10. Sping off check for win/cats game branch
11. Integrate logic to check GAMESTORE object for a win/loss
12. make sure when win/loss occurs it passes gameOver:true to back end
13. make sure when win/loss occurs it updates the gameStatus display on my front end
14. Merge back into master branch
15. Split off new branch call, newGameBoardReset
16. Make sure new game button clears exisitng game board

That might be enough for day two...
