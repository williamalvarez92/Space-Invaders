function init() {

  const startBtn = document.getElementById('start')
  const restartBtn = document.getElementById('restart')

  function restart() {
    window.location.reload()
  }

  function startGame() {

    // Button display
    if (startBtn.disabled === true) {
      startBtn.style.display = 'none'
      restartBtn.style.display = 'flex'
    }

    // ### HTML Elements

    const grid = document.querySelector('.grid')
    const livesHTML = document.getElementById('lives')
    const scoreHTML = document.getElementById('score')
    const audio = document.getElementById('audio')
  
    // ### Sounds

    function shootingSound() {
      audio.src = './files/sounds/shoot.wav'
      audio.play()
    }


    // ### Classes

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

    // -------------------------- ### GRID ### --------------------------------------

    const width = 20
    const numCells = width * width
    const cells = []

    function gridCreator() {
      for (let i = 0; i < numCells; i++) {
        // const iwidth = i % width
        // const irow = i % 40
        const cell = document.createElement('div')
        // cell.innerText = i
        grid.appendChild(cell)
        cells.push(cell)
        scoreHTML.innerText = `Score: ${score}`
        livesHTML.innerText = `Life: ${life}`

      }
    }

    //  ------------------------------ ## STATS ## -----------------------------------

    const lives = 3
    let life = lives
    let score = 0

    // ---------------------------- ## GRID EXTRAS ## -----------------------------

    const blocks = [344, 345, 349, 350, 354, 355]

    function addBlocks() {
      for (let i = 0; i < blocks.length; i++) {
        {
          cells[blocks[i]].classList.add(block)
        }
      }
    }

    function addExplosion(index) {
      cells[index].classList.add(explosion)
    }

    //------------------------------ ## INVADERS ## ----------------------------------

    // Grid numbers

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

    // TYPE 1 ENEMY (FOR DISPLAY PURPOSES)
    function addEnemies1() {
      for (let i = 0; i < enemies.length; i++) {
        if (deadEnemies.includes(i) === false) {
          if (i >= 0 && i <= 11) {
            addingTag(), cells[enemies[i]].classList.add(smallenemy1)
          } else if (i > 11 && i <= 35) {
            addingTag(), cells[enemies[i]].classList.add(middleenemy1)
          } else if (i > 35 && i <= 60) {
            addingTag(), cells[enemies[i]].classList.add(bigenemy1)
          }
        }
      }
    }
    // TYPE 2 ENEMY (FOR DISPLAY PURPOSES)
    function addEnemies2() {
      for (let i = 0; i < enemies.length; i++) {
        if (deadEnemies.includes(i) === false) {
          if (i >= 0 && i <= 11) {
            addingTag(), cells[enemies[i]].classList.add(smallenemy2)
          } else if (i > 11 && i <= 35) {
            addingTag(), cells[enemies[i]].classList.add(middleenemy2)
          } else if (i > 35 && i <= 60) {
            addingTag(), cells[enemies[i]].classList.add(bigenemy2)
          }
        }
      }
    }

    function removeEnemies1() {
      removeingTag()
      for (let i = 0; i < enemies.length; i++) {
        if (i >= 0 && i <= 11) {
          cells[enemies[i]].classList.remove(smallenemy1)
        } else if (i > 11 && i <= 35) {
          cells[enemies[i]].classList.remove(middleenemy1)
        } else if (i > 35 && i <= 60) {
          cells[enemies[i]].classList.remove(bigenemy1)
        }
      }
    }

    function removeEnemies2() {
      removeingTag()
      for (let i = 0; i < enemies.length; i++) {
        if (i >= 0 && i <= 11) {
          cells[enemies[i]].classList.remove(smallenemy2)
        } else if (i > 11 && i <= 35) {
          cells[enemies[i]].classList.remove(middleenemy2)
        } else if (i > 35 && i <= 60) {
          cells[enemies[i]].classList.remove(bigenemy2)
        }
      }
    }

    // MOVING FUNCTION FOR ENEMIES
    function enemyMover() {
      if ((enemies[0] % 2 === 0 && enemies[0] % width !== 0 && enemies[enemies.length - 1] % width !== width - 1 && enemies[0] % (width * 2) >= width) || (enemies[0] % 2 === 0 && enemies[0] % width === 0 && enemies[0] % width !== width - 1 && enemies[0] % (width * 2) >= width)) {
        removeEnemies2()
        removeEnemies1()
        for (let i = 0; i < enemies.length; i++) {
          enemies[i] += 1
        }
        addEnemies1()
      } else if ((enemies[0] % 2 === 1 && enemies[0] % width !== 0 && enemies[enemies.length - 1] % width !== width - 1 && enemies[0] % (width * 2) >= width) || (enemies[0] % 2 === 1 && enemies[0] % width === 0 && enemies[0] % width !== width - 1 && enemies[0] % (width * 2) >= width)) {
        removeEnemies2()
        removeEnemies1()
        for (let i = 0; i < enemies.length; i++) {
          enemies[i] += 1
        }
        addEnemies2()
      } else if ((enemies[0] % 2 === 0 && enemies[0] % width !== 0 && enemies[enemies.length - 1] % width === width - 1 && enemies[0] % (width * 2) >= width) || (enemies[0] % 2 === 0 && enemies[0] % width === 0 && enemies[0] % width !== width - 1 && enemies[0] % (width * 2) < width)) {
        removeEnemies2()
        removeEnemies1()
        for (let i = 0; i < enemies.length; i++) {
          enemies[i] += width
        }
        addEnemies1()
        removeEnemies2()
      } else if ((enemies[0] % 2 === 1 && enemies[0] % width !== 0 && enemies[enemies.length - 1] % width === width - 1 && enemies[0] % (width * 2) >= width) || (enemies[0] % 2 === 1 && enemies[0] % width === 0 && enemies[0] % width !== width - 1 && enemies[0] % (width * 2) < width)) {
        removeEnemies2()
        removeEnemies1()
        for (let i = 0; i < enemies.length; i++) {
          enemies[i] += width
        }
        addEnemies2()
      } else if (enemies[0] % 2 === 0 && enemies[0] % width !== 0 && enemies[0] % width !== width - 1 && enemies[0] % (width * 2) < width) {
        removeEnemies2()
        removeEnemies1()
        for (let i = 0; i < enemies.length; i++) {
          enemies[i] -= 1
        }
        addEnemies1()
      } else if (enemies[0] % 2 === 1 && enemies[0] % width !== 0 && enemies[0] % width !== width - 1 && enemies[0] % (width * 2) < width) {
        removeEnemies2()
        removeEnemies1()
        for (let i = 0; i < enemies.length; i++) {
          enemies[i] -= 1
        }
        addEnemies2()
      } else if (((cells[currentShipPos].classList.contains('enemy') && cells[currentShipPos].classList.contains('ship')) ||
                    life === 0) ||
                (enemies.length === deadEnemies.filter((num, index) => deadEnemies.indexOf(num) === index).length)) {
        clearInterval(addEnemyStop)
      }
      gameOver()
    }
    const addEnemyStop = setInterval(enemyMover, 1000)

    // ARRAY WITH ENEMIES THAT ARE DEAD
    const deadEnemies = []

    //------------------- ## SHIP ## ------------------------

    document.addEventListener('keydown', shipMover)

    // CORRELATION OF SHIP IN GRID
    
    const startShip = numCells - width + (width / 2 - 1)
    let currentShipPos = startShip

    function addShip(index) {
      cells[index].classList.add(ship)
    }

    function removeShip(index) {
      cells[index].classList.remove(ship)
    }
    
    const leftbtn = document.getElementById('left')
    const rightbtn = document.getElementById('right')
    const shootbtn = document.getElementById('shoot')

    leftbtn.addEventListener('click', leftbtnmove)
    rightbtn.addEventListener('click', rightbtnmove)
    shootbtn.addEventListener('click', shootbtnmove)
    
    function leftbtnmove () {
      removeShip(currentShipPos)
      currentShipPos--
      addShip(currentShipPos)
    }
    function rightbtnmove () {
      removeShip(currentShipPos)
      currentShipPos++
      addShip(currentShipPos)
    }
    function shootbtnmove () {
      return laserMover(currentShipPos)
    }

    function shipMover(event) {
      console.log(event.keyCode)
      removeShip(currentShipPos)
      const key = event.keyCode
      const space = 32
      const right = 39
      const left = 37
      const h = 72
      const e = 69

      if (key === right && currentShipPos < numCells - 1) {
        currentShipPos++
      } else if (key === left && currentShipPos > numCells - width) {
        currentShipPos--
      } else if (key === space) {
        laserMover(currentShipPos),
        shootingSound
      } else if (key === h) {
        console.log(enemies)
      } else if (key === e) {
        console.log()
      } else {
        console.log('Pong sound!')
      }
      addShip(currentShipPos)
    }

    //------------------- ## LASERS ## ------------------------

    // ## GOOD LASER ## 

    function addLaser(index) {
      if (index >= 0) {
        cells[index].classList.add(bam)
      }
    }

    function removeLaser(index) {
      if (index >= 0) {
        cells[index].classList.remove(bam)
      }
    }

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

    // ## EVIL LASER ##

    function addEvilLaser(index) {
      cells[index].classList.add(boom)
    }

    function removeEvilLaser(index) {
      cells[index].classList.remove(boom)
    }


    const evilLaserActId = setInterval(evilLaserRandom, 500)

    function evilLaserRandom() {
      const randomLaser = enemies[Math.floor(Math.random() * enemies.length)]
      evilLaserMover(randomLaser)
    }

    function evilLaserMover(index) {
      setInterval(function interEvilLaser() {
        if (index > 0 && index < numCells - width - 1) {
          removeEvilLaser(index),
          index += width,
          addEvilLaser(index)
        } else if (index >= 0 && index >= numCells - width && index <= numCells - 1 && cells[index].classList.contains('ship') === false) {
          removeShip(index),
          removeEvilLaser(index)
        } else if (index >= 0 && index >= numCells - width && index <= numCells - 1 && cells[index].classList.contains('block') === true && cells[index].classList.contains('boom') === true) {
          removeEvilLaser(index), addExplosion(index)
        } else if (index >= 0 && index >= numCells - width && index <= numCells - 1 && cells[index].classList.contains('ship') === true && cells[index].classList.contains('boom') === true) {
          removeShip(index), addExplosion(index)
          life--
          livesHTML.innerText = `Life: ${life}`

        }
      }, 300)
    }

    // -----------  CLEANER (Couldnt find a more efficient way of doing this) ----------------------------

    function cleaner() {
      setInterval(function gridCleaner() {
        for (let i = 0; i < numCells - 1; i++) {
          if (cells[i].classList.contains('explosion')) {
            cells[i].classList.remove(explosion)
          }
        }
      }, 1500)
    }

    // ================ ### START GAME ###  ========================
    
    gridCreator()
    addShip(currentShipPos)
    enemyMover()
    evilLaserRandom()
    addBlocks()
    cleaner()
    
    // ================== ## GAME OVER ## ==========================

    function gameOver() {
      if ((cells[currentShipPos].classList.contains('enemy') && cells[currentShipPos].classList.contains('ship')) || life <= 0) {
        clearInterval(addEnemyStop),
        clearInterval(evilLaserActId),
        cells[8].innerText = 'GAME',
        cells[11].innerText = 'OVER'
      } else if (enemies.length === deadEnemies.filter((num, index) => deadEnemies.indexOf(num) === index).length) {
        clearInterval(addEnemyStop),
        clearInterval(evilLaserActId),
        cells[8].innerText = 'YOU',
        cells[11].innerText = 'WIN'
      }
    }
    restartBtn.addEventListener('click', restart)
  }
  startBtn.addEventListener('click', startGame)
}

window.addEventListener('DOMContentLoaded', init)