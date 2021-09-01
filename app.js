function init() {

    // ### Elements

    const grid = document.querySelector('.grid')

    /// ### Grid

    const width = 20
    const numCells = width * width
    const cells = []

    // ### Classes

    const ship = 'ship'
    const bam = 'bam'
    const boom = 'boom'
    const smallenemy1 = 'smallenemy1'
    const smallenemy2 = 'smallenemy2'
    const middleenemy1 = 'middleenemy1'
    const middleenemy2 = 'middleenemy2'
    const bigenemy1 = 'bigenemy1'
    const bigenemy2 = 'bigenemy2'


    // ### Positioning

    //Ship

    const startShip = numCells - width + (width / 2 - 1)
    let currentShipPos = startShip

    //Enemy

    const startEnemy = width
    let currentEnemyPos = startEnemy
    const rowsWithEnemies = 5
    const columnsWithEnemies = 11
        // Posible way to find last enemy:
        // const rightEnemy = currentEnemyPos + totalColumnsEnemies

    //  ### Adds/Removals

    // Ship

    function addShip(index) {
        cells[index].classList.add(ship)
    }

    function removeShip(index) {
        cells[index].classList.remove(ship)
    }

    // Enemy

    function addEnemy(num) {
        for (let i = 0; i < width * rowsWithEnemies; i++) {
            if (num === 1) {
                if (i < width && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.add(smallenemy1)
                } else if (i >= width && i < width * 3 && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.add(middleenemy1)
                } else if (i >= width * 3 && i < width * 6 && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.add(bigenemy1)
                }
            } else if (num === 2) {
                if (i < width && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.add(smallenemy2)
                } else if (i >= width && i < width * 3 && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.add(middleenemy2)
                } else if (i >= width * 3 && i < width * 6 && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.add(bigenemy2)
                }
            }
        }
    }
    //Alternative rows
    // && i % (width * 2) < width
    //Alternative columns
    // i % 2 === 0

    function removeEnemy(num) {
        // cells[index].classList.remove(enemy)
        for (let i = 0; i < width * rowsWithEnemies; i++) {
            if (num === 1) {
                if (i < width && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.remove(smallenemy1)
                } else if (i >= width && i < width * 3 && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.remove(middleenemy1)
                } else if (i >= width * 3 && i < width * 6 && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.remove(bigenemy1)
                }
            } else if (num === 2) {
                if (i < width && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.remove(smallenemy2)
                } else if (i >= width && i < width * 3 && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.remove(middleenemy2)
                } else if (i >= width * 3 && i < width * 6 && i % width <= columnsWithEnemies) {
                    cells[currentEnemyPos + i].classList.remove(bigenemy2)
                }
            }
        }
    }

    // Laser

    function addLaser(index) {
        cells[index].classList.add(bam)
    }

    function removeLaser(index) {
        cells[index].classList.remove(bam)
    }


    // Evil laser

    function addEvilLaser(index) {
        cells[index].classList.add(boom)
    }

    function removeEvilLaser(index) {
        cells[index].classList.remove(boom)
    }
    //   ### Intervals

    // Enemy DONE

    function enemyMove() {
        setInterval(function interEnemy() {
            // need to find a more responsive way to add the 5 below for the end of the enemy depending on n. of columns
            if (currentEnemyPos % 2 === 1 && currentEnemyPos % width !== 8 && currentEnemyPos % (width * 2) >= width) {
                removeEnemy(1), currentEnemyPos++,
                    addEnemy(2)
            } else if (currentEnemyPos % 2 === 0 && currentEnemyPos % width !== 8 && currentEnemyPos % (width * 2) >= width) {
                removeEnemy(2), currentEnemyPos++,
                    addEnemy(1)
            } else if (currentEnemyPos < (width * rowsWithEnemies * 3 - width) && currentEnemyPos % width === 8 && currentEnemyPos % width !== 0 && currentEnemyPos % (width * 2) >= width) {
                removeEnemy(2), currentEnemyPos += width,
                    addEnemy(1)
            } else if (currentEnemyPos % 2 === 1 && currentEnemyPos % (width * 2) <= width && currentEnemyPos % width !== 0) {
                removeEnemy(2), currentEnemyPos--,
                    addEnemy(1)
            } else if (currentEnemyPos % 2 === 0 && currentEnemyPos % (width * 2) <= width && currentEnemyPos % width !== 0) {
                removeEnemy(1), currentEnemyPos--,
                    addEnemy(2)
            } else if (currentEnemyPos < (width * rowsWithEnemies * 3 - width) && currentEnemyPos % width === 0 && currentEnemyPos % (width * 2) <= width) {
                removeEnemy(1), currentEnemyPos += width,
                    addEnemy(2)
            } else {
                console.log('GAME OVER')
            }
        }, 1000)
    }

    // Laser DONE

    function laserMove(index) {
        setInterval(function interLaser() {
            if (index > width - 1) {
                removeLaser(index),
                    index -= width
                addLaser(index)
            } else {
                removeLaser(index)
            }
        }, 50)
    }

    // Evil laser move
    function evilLaserMove(index) {
        setInterval(function interEvilLaser() {
            if (index < (numCells - width)) {
                removeEvilLaser(index),
                    index += width,
                    addEvilLaser(index)
            } else {
                removeEvilLaser(index)
            }
        }, 300)
    }

    // Evil laser random

    function evilLaserRandom() {
        setInterval(function interEvilLaser() {
            const randomLaser = currentEnemyPos + (Math.floor(Math.random() * columnsWithEnemies))
            evilLaserMove(randomLaser)
        }, 5000)
    }

    // Laser Delayer


    // function EvilLaserRandom() {
    //     let randomLaser = cells[(Math.floor(Math.random() * totalColumnsEnemies))]
    //     for (let i = 0; i < 10; i++) {
    //         if (i >= currentEnemyPos && i < totalColumnsEnemies) {

    //             EvilLaserMove(randomLaser)
    //         }
    //     }
    // }

    // Checker

    // function checker() {
    //     for (let i = 0; i < numCells - width - 1; i++) {
    //         // Enemy destroy ship
    //         if ()
    //     }
    // }

    // ### Grid creator (DONT TOUCH!)

    function GridCreator() {
        for (let i = 0; i < numCells; i++) {
            const iwidth = i % width
            const irow = i % 40
            const cell = document.createElement('div')
            cell.innerText = i
            grid.appendChild(cell)
            cells.push(cell)
        }
        addShip(startShip)
        addEnemy(currentEnemyPos)
        enemyMove()
        evilLaserRandom()
    }

    // ### Control (DONT TOUCH!)

    function movingShip(event) {
        // console.log(event.keyCode)
        removeShip(currentShipPos)
        const key = event.keyCode
        const space = 32
        const right = 39
        const left = 37
        const h = 72
        const t = 84

        if (key === right && currentShipPos < numCells - 1) {
            currentShipPos++
        } else if (key === left && currentShipPos > numCells - width) {
            currentShipPos--
        } else if (key === space) {
            console.log('BAM!')
            laserMove(currentShipPos)
        } else if (key === h) {
            console.log(18 % (width * 2))
        } else if (key === t) {
            shipChecker()
        } else {
            console.log('Pong sound!')
        }
        addShip(currentShipPos)
    }

    // ### Cell checker

    // Ship

    function shipChecker() {
        if (grid.classList.contains('test') === true) {
            console.log('yes')
        } else {
            console.log('no')
        }
    }


    // START

    GridCreator()


    document.addEventListener('keydown', movingShip)
}

window.addEventListener('DOMContentLoaded', init)