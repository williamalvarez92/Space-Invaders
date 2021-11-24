# 👾 Space Invaders 👾

This is my first solo project. I have played the game when I was a kid many times, it is an icon for an aspiring software engineer.

#### <a href='https://williamalvarez92.github.io/Space-Invaders/'>CLICK HERE TO PLAY!</a> 

#### LANGUAGES AND TOOLS USED:
- Vanilla JavaScript<details><summary>Code used</summary>
      - Functions</br>
      - EventListeners </br>
-IF and OR statements</br>
-For loops</br>
-Numerous methods (.push, .forEach, etc...)</br>
-Responsive document elements</br>
-And more</details>
- CSS
- HTML
- GIT
- GIT PAGES

## Overview 

There are no installations or dependencies required for this project. The project consists of three files: `app.js` `style.css` `index.html`.


### Approach

#### Planning 📊

I made a small sketch on paper first on how I wanted it to look and any extra functionality I wanted. I then laid out how the code would be structured and which tools I was going to use.

Regarding styling, I wanted to make it a Mario themed game. However, after reading more about the game I decided to make it a tribute to the game, mimicking how it looked.

In the end, the main plan changed because of a function. I planned to use a function to add the enemies, however, I had to pivot 4 days later after trying to figure a way to work.


#### The Build 🚧

##### 🔵 Grid:
<details><summary>Show details</summary>Using eventListeners and functions. So that it automatically creates a cell and appends it to HTML.

```
const width = 20
const numCells = width * width
const cells = []
function gridCreator() {
      for (let i = 0; i < numCells; i++) {
        const cell = document.createElement('div')
        grid.appendChild(cell)
        cells.push(cell)
        scoreHTML.innerText = `Score: ${score}`
        livesHTML.innerText = `Life: ${life}`
      }
    }
``` 
</details>

</p>

##### 🔵 Layout:
<details><summary>Show details</summary>Defining the main body structure. In this case. The basic structure is of 2 divisions inside the HTML file. These divisions are the grid and the right container where the stats, the intro and controls are.

```
        <section class="main-container">
            <div class="grid"></div>
            <div class="right-container">
                <div class="points-board">
                    <div id="lives"></div>
                    <div id='score'></div>
                    <div>
                      <button id='start' class='buttons' onClick="this.disabled = true">START</button>
                      <button id='restart' class='buttons' onClick="window.location.reload()" onClick="this.disabled = true">RESTART</button>
                    </div>
                </div>
                <div class="points-board" id='writing'>Developed in 1978 by Tomohiro Nishikado, Space Invaders was the first shooter arcade in history. Tomohiro wanted to develop a war tank arcade however after some work was done, he pivoted into the arcade we all know. That is why the spaceship looks similar to a tank. <a href='https://en.wikipedia.org/wiki/Space_Invaders'>Find out more</a></div>
                <div class="controllers">
                      <button class='buttons' id='left'>👈</button>
                      <button class='buttons' id='shoot'>💥</button>
                      <button class='buttons' id='right'>👉</button>
                      <h5 id='keyboardInst' class="points-board">Keyboard: Left: Left arrow key / Shoot: Space / Right: Right arrow key</h5>
                </div>
                <div class="signature">Made with 👾 by <a href='https://github.com/williamalvarez92/'>William Alvarez</a></div>
            </div>
        </section>
```
</details>
</p>

##### 🔵 Classes:
<details><summary>Show details</summary>Using classes to refer to the elements: ship, aliens, blocks and lasers. By doing this, the game is able to reference HTML elements and style them and use them in the functions later on.

```
    const ship = 'ship'
    const bam = 'bam'
    const boom = 'boom'
    const explosion = 'explosion'
    const smallenemy1 = 'smallenemy1'
    const smallenemy2 = 'smallenemy2'
    const middleenemy1 = 'middleenemy1'
    const middleenemy2 = 'middleenemy2'
    const bigenemy1 = 'bigenemy1'
    const bigenemy2 = 'bigenemy2'
    const enemy = 'enemy'
    const block = 'block'
```
</details>
</p>



##### 🔵 Adding and Removing components:
<details><summary>Show details</summary>Using functions to add and remove classes depending on the cell and controls.

For example here is the ship, where currentShipPos will be used to determine the next position of the:
```
    const startShip = numCells - width + (width / 2 - 1)
    let currentShipPos = startShip

     function addShip(index) {
      cells[index].classList.add(ship)
    }

    function removeShip(index) {
      cells[index].classList.remove(ship)
    }
```

For specific cells like in the case of the aliens, an array is written with the specific starting points of the aliens, which will later be used to add and remove them in a rhythmical manner with an interval.

```
    const enemies = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
      81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
      101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112
    ]

    // ADDING TAG SO THAT THEY CAN BE IDENTIFIED
    function addingTag() {
      for (let i = 0; i < enemies.length; i++) {
        cells[enemies[i]].classList.add(enemy)
      }
    }

    function removeingTag() {
      for (let i = 0; i < enemies.length; i++) {
        cells[enemies[i]].classList.remove(enemy)
      }
    }
    const addEnemyStop = setInterval(enemyMover, 1000)
```

</details>
</p>

##### 🔵 Moving components:
<details><summary>Show details</summary>Once we can add and remove then we create the moving functions for each component (ship, aliens, lasers, etc...), also we can add the consequential actions for each mover function.

Here is how the laser moves, after an alien encounter it removes the laser, add explosion, adds a score and pushes the specific alien to the deadlist:
```
function laserMover(index) {
      setInterval(function interLaser() {
        if (index >= 0 && cells[index].classList.contains('smallenemy1') === true && cells[index].classList.contains('bam') === true ||
                    (index >= 0 && cells[index].classList.contains('smallenemy2') === true && cells[index].classList.contains('bam') === true) ||
                    (index >= 0 && cells[index].classList.contains('middleenemy1') === true && cells[index].classList.contains('bam') === true) ||
                    index >= 0 && cells[index].classList.contains('middleenemy2') === true && cells[index].classList.contains('bam') === true ||
                    (index >= 0 && cells[index].classList.contains('bigenemy1') === true && cells[index].classList.contains('bam') === true) ||
                    (index >= 0 && cells[index].classList.contains('bigenemy2') === true && cells[index].classList.contains('bam') === true)) {
          removeLaser(index), addExplosion(index)
          const deadlist = enemies.indexOf(index)
          deadEnemies.push(deadlist)
          score++
          scoreHTML.innerText = `Score: ${score}`
        } else {
          removeLaser(index),
          index -= width,
          addLaser(index)
        }
      }, 100)
    }
```
</details>
</p>

##### 🔵 Rendering structure:
<details><summary>Show details</summary>Using HTML buttons, the main function called startGame() will generate the main grid and place the components. Then the other button will activate the restart function which will reload the page.

For example here is the ship, where currentShipPos will be used to determine the next position of the ship:
```
  const startBtn = document.getElementById('start')
  const restartBtn = document.getElementById('restart')

  function restart() {
    window.location.reload()
  }
   function startGame() {.... here it comes the game code...}

```

</details>
</p>

#### Wins 🥇

I loved the fact that a simple JavaScrip file is enough to create a game from scratch.

Building this game gave me the motivation needed to follow coding and the confidence to know that I can master the basics of JavaScript CSS and HTML.

#### Challenges  🥋

- The rendering: I had a problem at the start with rendering. I tried to add an enemy the same way I would add the ship. But this made it almost impossible, as there will always be an enemy added even though the class was deleted.

<details><summary>Show details</summary>

For example here is the code from my code cemetery:
```
function addEnemy(startingPoint) {
    for (let i = 0; i < width * rowsWithEnemies; i++) {
        if (startingPoint % 2 === 1) {

            if (i < width && i % width <= columnsWithEnemies) {
                cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(smallenemy1)
            } else if (i >= width && i < width * 3 && i % width <= columnsWithEnemies) {
                cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(middleenemy1)
            } else if (i >= width * 3 && i < width * 6 && i % width <= columnsWithEnemies) {
                cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(bigenemy1)
            }
        } else if (startingPoint % 2 === 0) {
            if (i < width && i % width <= columnsWithEnemies) {
                cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(smallenemy2)
            } else if (i >= width && i < width * 3 && i % width <= columnsWithEnemies) {
                cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(middleenemy2)
            } else if (i >= width * 3 && i < width * 6 && i % width <= columnsWithEnemies) {
                cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(bigenemy2)
            }
        }
    }
}

```

</details>
      
- Finding more efficient ways for the moving of the components. Right now, the way it is structured is long and laggy.

#### Key Learnings 📖

I learnt a lot about classes, how they can be used in JavaScript to change the website. How classes can listen and how to structure it so that it can work in different parts of a project.

Also, basic functions. I learnt how to structure them so that they look clear and easy to read, for me and for anyone using the code.

#### Future Features ⭐
1) Improve the score rating.
2) Add event listeners and styling to the barricades so that they can also get hit.
3) Add a high scoreboard and save scores from previous plays.
4) Add different themes.
5) Make the button controls more mobile-friendly.
6) Sound.

#### Bugs 🐛
1) Removing enemies that are dead properly.
2) Stop shooting after hitting.
3) The ship can shoot only after the laser hits something or leaves the grid.
4) The styling of the aliens after they move down a row.
5) The way lives are counted.

#### Memorable moments<details><summary>Show pictures</summary>Experimenting with different type of enemies formation.![Screenshot from 2021-08-27 19-40-00](https://user-images.githubusercontent.com/83907621/131187338-7f6fd9f0-0795-4a4e-b882-26e1293897b7.png)![Screenshot from 2021-08-27 19-22-47](https://user-images.githubusercontent.com/83907621/131187427-36093215-a01b-4739-8488-fc231bd11f87.png)![Screenshot from 2021-08-27 19-06-31](https://user-images.githubusercontent.com/83907621/131187478-60b79c70-8055-4515-87ed-a0ef0871ddf5.png)![Screenshot from 2021-08-27 19-25-53](https://user-images.githubusercontent.com/83907621/131187641-06042113-1031-4ea3-979b-0d3757ca335b.png)![Screenshot from 2021-08-30 20-17-43](https://user-images.githubusercontent.com/83907621/131393025-2ed31bea-0fb2-46a5-a693-eda0e42f7dd6.png)Making the aliens got crazy!![Screenshot from 2021-08-31 10-14-38](https://user-images.githubusercontent.com/83907621/131476676-f798345c-8f7c-448d-9b96-9b0ee275c23e.png)
</details>

Hope you had the chance of playing the game and that you enjoyed it!

I am always welcome to any comments, so do not hesitate to contact me if you want to comment or suggest anything.

Check my GitHub account: <a href='https://github.com/williamalvarez92'>HERE</>

