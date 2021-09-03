function init() {

    // // ### Elements

    const grid = document.querySelector('.grid')
    const livesHTML = document.getElementById('lives')
    const scoreHTML = document.getElementById('score')


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

    // ### Game stats

    // Grid

    const width = 20
    const numCells = width * width
    const cells = []

    // Lives

    const lives = 3
    let life = lives

    // Score

    let score = 0


    // ### Positioning

    //Ship

    const startShip = numCells - width + (width / 2 - 1)
    let currentShipPos = startShip

    //Enemy


    const rowsWithEnemies = 5
    const columnsWithEnemies = 11


    const enemies = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
        61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
        81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112
    ]
    console.log(enemies)


    //  ### Adds/Removals

    // Shortcuts

    // Enemies

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

    function addEnemies1() {
        for (let i = 0; i < enemies.length; i++) {
            if (deadEnemies.includes(i) === false) {
                if (i <= 12) {
                    addingTag(), cells[enemies[i]].classList.add(smallenemy1)
                } else if (i > 12 && i <= 36) {
                    addingTag(), cells[enemies[i]].classList.add(middleenemy1)
                } else if (i > 36 && i <= 60) {
                    addingTag(), cells[enemies[i]].classList.add(bigenemy1)
                }
            }
        }
    }

    function addEnemies2() {
        for (let i = 0; i < enemies.length; i++) {
            if (deadEnemies.includes(i) === false) {
                if (i <= 12) {
                    addingTag(), cells[enemies[i]].classList.add(smallenemy2)
                } else if (i > 12 && i <= 36) {
                    addingTag(), cells[enemies[i]].classList.add(middleenemy2)
                } else if (i > 36 && i <= 60) {
                    addingTag(), cells[enemies[i]].classList.add(bigenemy2)
                }
            }
        }
    }

    function removeEnemies1() {
        removeingTag()
        for (let i = 0; i < enemies.length; i++) {
            if (i >= 0 && i <= 12) {
                cells[enemies[i]].classList.remove(smallenemy1)
            } else if (i > 12 && i <= 36) {
                cells[enemies[i]].classList.remove(middleenemy1)
            } else if (i > 36 && i <= 60) {
                cells[enemies[i]].classList.remove(bigenemy1)
            }
        }
    }

    function removeEnemies2() {
        removeingTag()
        for (let i = 0; i < enemies.length; i++) {
            if (i >= 0 && i <= 12) {
                cells[enemies[i]].classList.remove(smallenemy2)
            } else if (i > 12 && i <= 36) {
                cells[enemies[i]].classList.remove(middleenemy2)
            } else if (i > 36 && i <= 60) {
                cells[enemies[i]].classList.remove(bigenemy2)
            }
        }
    }

    // Ship

    function addShip(index) {
        cells[index].classList.add(ship)

    }

    function removeShip(index) {
        cells[index].classList.remove(ship)
    }

    // Explosions

    function addExplosion(index) {
        cells[index].classList.add(explosion)
    }

    // Laser

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

    // Evil enemy laser

    function addEvilLaser(index) {
        cells[index].classList.add(boom)
    }

    function removeEvilLaser(index) {
        cells[index].classList.remove(boom)
    }


    // ### Movers

    // Enemy mover (Renamed them to movers as it makes it easier for me to understand)

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
        }
        gameOver()
    }
    const enemyId = setInterval(enemyMover, 1000)

    // Ship

    function shipMover(event) {
        // console.log(event.keyCode)
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
            laserMover(currentShipPos)
        } else if (key === h) {
            console.log(enemies)
        } else if (key === e) {
            console.log(sortingOutDeaths(deadEnemies))
        } else {
            console.log('Pong sound!')
        }
        addShip(currentShipPos)

    }

    const deadEnemies = []

    function laserMover(index) {
        setInterval(function interLaser() {
            if (index >= 0 && cells[index].classList.contains('enemy') === true && cells[index].classList.contains('bam') === true) {
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


    // Evil laser random
    const evilLaserActId = setInterval(evilLaserRandom, 500)

    function evilLaserRandom() {
        const randomLaser = enemies[Math.floor(Math.random() * enemies.length)]
        evilLaserMover(randomLaser)
    }

    // Evil laser move

    function evilLaserMover(index) {
        setInterval(function interEvilLaser() {
            if (index > 0 && index < numCells - width - 1) {
                removeEvilLaser(index),
                    index += width,
                    addEvilLaser(index)
            } else if (index >= 0 && index >= numCells - width && index <= numCells - 1 && cells[index].classList.contains('ship') === false) {
                removeShip(index),
                    removeEvilLaser(index)
            } else if (index >= 0 && index >= numCells - width && index <= numCells - 1 && cells[index].classList.contains('ship') === true && cells[index].classList.contains('boom') === true) {
                removeShip(index), addExplosion(index)
                life--
                livesHTML.innerText = `Life: ${life}`

            }
        }, 300)
    }

    // ### Cleaner (Couldnt find a more efficient way of doing this)

    function cleaner() {
        setInterval(function gridCleaner() {
            for (let i = 0; i < numCells - 1; i++) {
                if (cells[i].classList.contains('explosion')) {
                    cells[i].classList.remove(explosion)
                }
            }
        }, 1500)
    }


    // ## GAME STARTS 

    // Grid

    function gridCreator() {
        for (let i = 0; i < numCells; i++) {
            const iwidth = i % width
            const irow = i % 40
            const cell = document.createElement('div')

            grid.appendChild(cell)
            cells.push(cell)
            scoreHTML.innerText = `Score: ${score}`
            livesHTML.innerText = `Life: ${life}`

        }
    }

    gridCreator()
    addShip(currentShipPos)
    addEnemies1()
    enemyMover()
    evilLaserRandom()
    cleaner()


    document.addEventListener('keydown', shipMover)

    // Game Over

    function gameOver() {
        for (let i = 0; i < enemies.length; i++) {
            if ((cells[currentShipPos].classList.contains('enemy') && cells[currentShipPos].classList.contains('ship')) || life === 0) {
                clearInterval(enemyId), clearInterval(evilLaserActId), alert('GAME OVER')
            } else if (enemies.length === deadEnemies.filter((num, index) => deadEnemies.indexOf(num) === index).length) { alert('YOU WIN') }
        }
    }

    //// ### CODE SCRAP YARD  


    //   function evilLaserMover(index) {
    //     setInterval(function interEvilLaser() {
    //         if (index > 0 && index < numCells - width - 1) {
    //             removeEvilLaser(index),
    //                 index += width,
    //                 addEvilLaser(index)
    //         } else if (index >= 0 && index >= numCells - width && index <= numCells - 1 && cells[index].classList.contains('ship') === false) {
    //             removeShip(index),
    //                 removeEvilLaser(index)
    //         } else if (index >= 0 && index >= numCells - width && index <= numCells - 1 && cells[index].classList.contains('ship') === true && cells[index].classList.contains('boom') === true) {
    //             removeShip(index), addExplosion(index)
    //             life--
    //             livesHTML.innerText = `Life: ${life}`
    //         }
    //     }, 300)
    // }


    // function enemyMove() {
    // //     setInterval(function interEnemy() {

    // //         if (currentEnemyPos % 2 === 1 && currentEnemyPos % width !== 8 && currentEnemyPos % (width * 2) >= width) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos++,
    // //                 addEnemy(currentEnemyPos)
    // //         } else if (currentEnemyPos % 2 === 0 && currentEnemyPos % width !== 8 && currentEnemyPos % (width * 2) >= width) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos++,
    // //                 addEnemy(currentEnemyPos), console.log(deadEnemies)
    // //         } else if (currentEnemyPos < (width * rowsWithEnemies * 3 - width) && currentEnemyPos % width === 8 && currentEnemyPos % width !== 0 && currentEnemyPos % (width * 2) >= width) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos += width,
    // //                 addEnemy(currentEnemyPos), console.log(deadEnemies)
    // //         } else if (currentEnemyPos % 2 === 1 && currentEnemyPos % (width * 2) <= width && currentEnemyPos % width !== 0) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos--,
    // //                 addEnemy(currentEnemyPos), console.log(deadEnemies)
    // //         } else if (currentEnemyPos % 2 === 0 && currentEnemyPos % (width * 2) <= width && currentEnemyPos % width !== 0) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos--,
    // //                 addEnemy(currentEnemyPos), console.log(deadEnemies)
    // //         } else if (currentEnemyPos < (width * rowsWithEnemies * 3 - width) && currentEnemyPos % width === 0 && currentEnemyPos % (width * 2) <= width) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos += width,
    // //                 addEnemy(currentEnemyPos), console.log(deadEnemies)
    // //         } else {
    // //             console.log('GAME OVER')
    // //         }
    // //     }, 2000)
    // // }
    // const startEnemy = 0
    // const currentEnemyPos = startEnemy
    //     // Posible way to find last enemy:
    //     // const rightEnemy = currentEnemyPos + totalColumnsEnemies

    // // function addEnemy(startingPoint) {
    // //     for (let i = 0; i < width * rowsWithEnemies; i++) {
    // //         if (startingPoint % 2 === 1) {

    // //             if (i < width && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(smallenemy1)
    // //             } else if (i >= width && i < width * 3 && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(middleenemy1)
    // //             } else if (i >= width * 3 && i < width * 6 && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(bigenemy1)
    // //             }
    // //         } else if (startingPoint % 2 === 0) {
    // //             if (i < width && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(smallenemy2)
    // //             } else if (i >= width && i < width * 3 && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(middleenemy2)
    // //             } else if (i >= width * 3 && i < width * 6 && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.add(enemy), cells[currentEnemyPos + i].classList.add(bigenemy2)
    // //             }
    // //         }
    // //     }
    // // }



    // // function removeEnemy(startingPoint) {
    // //     for (let i = 0; i < width * rowsWithEnemies; i++) {
    // //         if (startingPoint % 2 === 1) {
    // //             if (i < width && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.remove(enemy), cells[currentEnemyPos + i].classList.remove(smallenemy1)
    // //             } else if (i >= width && i < width * 3 && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.remove(enemy), cells[currentEnemyPos + i].classList.remove(middleenemy1)
    // //             } else if (i >= width * 3 && i <= width * 6 && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.remove(enemy), cells[currentEnemyPos + i].classList.remove(bigenemy1)
    // //             }
    // //         } else if (startingPoint % 2 === 0) {
    // //             if (i < width && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.remove(enemy), cells[currentEnemyPos + i].classList.remove(smallenemy2)
    // //             } else if (i >= width && i < width * 3 && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.remove(enemy), cells[currentEnemyPos + i].classList.remove(middleenemy2)
    // //             } else if (i >= width * 3 && i <= width * 6 && i % width <= columnsWithEnemies) {
    // //                 cells[currentEnemyPos + i].classList.remove(enemy), cells[currentEnemyPos + i].classList.remove(bigenemy2)
    // //             } else if (i >= width * 3 && i <= width * 6 && i % width <= columnsWithEnemies && cells[i].classList.contains('bam')) {
    // //                 cells[i].classList.remove(bigenemy1)
    // //             }
    // //         }
    // //     }
    // // }

    // // function enemyMove() {
    // //     setInterval(function interEnemy() {

    // //         if (currentEnemyPos % 2 === 1 && currentEnemyPos % width !== 8 && currentEnemyPos % (width * 2) >= width) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos++,
    // //                 addEnemy(currentEnemyPos)
    // //         } else if (currentEnemyPos % 2 === 0 && currentEnemyPos % width !== 8 && currentEnemyPos % (width * 2) >= width) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos++,
    // //                 addEnemy(currentEnemyPos), console.log(deadEnemies)
    // //         } else if (currentEnemyPos < (width * rowsWithEnemies * 3 - width) && currentEnemyPos % width === 8 && currentEnemyPos % width !== 0 && currentEnemyPos % (width * 2) >= width) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos += width,
    // //                 addEnemy(currentEnemyPos), console.log(deadEnemies)
    // //         } else if (currentEnemyPos % 2 === 1 && currentEnemyPos % (width * 2) <= width && currentEnemyPos % width !== 0) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos--,
    // //                 addEnemy(currentEnemyPos), console.log(deadEnemies)
    // //         } else if (currentEnemyPos % 2 === 0 && currentEnemyPos % (width * 2) <= width && currentEnemyPos % width !== 0) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos--,
    // //                 addEnemy(currentEnemyPos), console.log(deadEnemies)
    // //         } else if (currentEnemyPos < (width * rowsWithEnemies * 3 - width) && currentEnemyPos % width === 0 && currentEnemyPos % (width * 2) <= width) {
    // //             removeEnemy(currentEnemyPos), currentEnemyPos += width,
    // //                 addEnemy(currentEnemyPos), console.log(deadEnemies)
    // //         } else {
    // //             console.log('GAME OVER')
    // //         }
    // //     }, 2000)
    // // }
    // // if (cells[i] === cells[currentEnemyPos] && cells[i].classList.contains('bam') === true) {
    // //     cells[currentEnemyPos].classList.remove(smallenemy1), cells[currentEnemyPos].classList.remove(middleenemy1), cells[currentEnemyPos].classList.remove(bigenemy1)}
    // //  if (cells[num].classList.contains('bam') === true) {
    // //     cells[currentEnemyPos + i].classList.remove(smallenemy1), cells[currentEnemyPos + i].classList.remove(middleenemy1), cells[currentEnemyPos + i].classList.remove(bigenemy1)}

    // // } else if (cells[startingPoint].classList.contains('bam') === false && startingPoint % 2 === 0) {
    // //     if (cells[i].classList.contains('bam')) {
    // //         cells[currentEnemyPos + i].classList.remove(bigenemy1)}

    // //Alternative rows
    // // && i % (width * 2) < width
    // //Alternative columns
    // // i % 2 === 0



    // //   ### Intervals

    // // Enemy DONE





    // // Laser DONE
    // const deadEnemies = []

    // function laserMove(index) {
    //     setInterval(function interLaser() {

    //         if (index <= numCells - 1 && index >= width && cells[index].classList.contains('enemy') === false && cells[index].classList.contains('boom') === false) {
    //             removeLaser(index),
    //                 index -= width
    //             addLaser(index)
    //         } else if (cells[index].classList.contains('enemy') === true && cells[index].classList.contains('bam') === true) {
    //             removeLaser(index)
    //             deadEnemies.push(index)
    //         } else if (index < width && cells[index].classList.contains('enemy') === false && cells[index].classList.contains('boom') === false) {
    //             removeLaser(index)
    //         }
    //     }, 50)
    // }



    // // Evil laser move

    // function evilLaserMove(index) {
    //     setInterval(function interEvilLaser() {
    //         if (index > 0 && index < numCells - width - 1) {
    //             removeEvilLaser(index),
    //                 index += width,
    //                 addEvilLaser(index)
    //         } else if (index >= 0 && index >= numCells - width && index <= numCells - 1 && cells[index].classList.contains('ship') === false) {
    //             removeShip(index),
    //                 removeEvilLaser(index)
    //         } else if (index >= 0 && index >= numCells - width && index <= numCells - 1 && cells[index].classList.contains('ship') === true && cells[index].classList.contains('boom') === true) {
    //             removeShip(index), addExplosion(index)
    //             life--
    //             livesHTML.innerText = `Life: ${life}`
    //         }
    //     }, 300)
    // }

    // // Evil laser random

    // function evilLaserRandom() {
    //     setInterval(function interEvilLaser() {
    //         const randomLaser = currentEnemyPos + (Math.floor(Math.random() * columnsWithEnemies))
    //         evilLaserMove(randomLaser)
    //     }, 500)
    // }

    // // ### Cleaner

    // function cleaner() {
    //     setInterval(function gridCleaner() {
    //         for (let i = 0; i < numCells - 1; i++) {
    //             if (cells[i].classList.contains('explosion')) {
    //                 cells[i].classList.remove(explosion)
    //             }
    //         }
    //     }, 1500)
    // }

    // // START

    // gridCreator()
    //     // lifecount()
    //     // addShip(startShip)
    //     // addEnemy(currentEnemyPos)
    //     // enemyMove()
    //     // evilLaserRandom()
    //     // cleaner()


    // const noLivesId = setInterval(noLives, 100)

    // function noLives() { if (life === 0) { alert('GAME OVER'), clearInterval(noLivesId) } }
    // noLives()
    // document.addEventListener('keydown', movingShip)

}

window.addEventListener('DOMContentLoaded', init)