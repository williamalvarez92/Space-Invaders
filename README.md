# Space Invaders

## This is my first project; recreating the classic:
## Space Invaders!


I have played it when I was a kid many times, it is a an icon for an aspiring software developer.

In terms of difficulty it feels more or less as difficult, but at the same time I have the feeling I will learn so much from it.

The plan:
1) Make a grid: Using eventListeners and formulas

2) Will use classes to hide all the elements: ship, aliens, and lasers
3) Controls: Will use right left and space, using two formulas, one for moving and one for shooting
4) Cells:
First bottom row will be the spaceship and after for the invaders. With class for the ship and invaders.
The rest of the cells will be for invaders and shooting lasers. All with one column apart so that you can miss (Otherwise what's the fun?) Last row is empty for scoring and some space for any text, scores, etc.
5) Main evenLinstener:
- Game checker: For the game, if the alien has the same class as red laser (player laser) and the other way around if ship has blue laser (alien laser). And then delete the class for the alien/ship with function.
6) Functions:

- Alien movement: They will need to be moving, from left to right, with an interval (can conf here to make it more difficult the further they go). Until they reach the goal cells in the bottom and the game checker will activate.
- Red shooting function: every time we press space, a laser will come out from the ship up. If it hits an alien then the checker activates.
- Blue shooting function: Randomly shoots from an alien, and goes down. If it hits the ship then the checker activates.


7) Extras:
- Music (will ry to do it while coding main game)
- Gifs
- Leading board
- Cool theme (tbd extra div where you can choose aliens or upload your own (from url only))
