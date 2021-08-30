function init() {

    // ### Elements

    const grid = document.querySelector('.grid')

    /// ### Grid

    const width = 20
    const numCells = width * width
    const cells = []
    const row = width - 1
    const addColumn = width + width

    /// ### Classes

    const ship = 'ship'
    const enemy = 'enemy'
    const bam = 'bam'

    // ### Positioning

    //Ship
    const startShip = numCells - width + (width / 2 - 1)
    let currentShipPos = startShip

    //Enemy
    const startEnemy = 2
    const currentEnemyPos = startEnemy
    const rowsWithEnemies = 4
    const totalRowsEnemies = rowsWithEnemies * 2
    const columnsWithEnemies = 7
    const totalColumnsEnemies = columnsWithEnemies * 2

    //Laser
    // const startLaser = currentShipPos
    // let currentLaserPos = startLaser

    //  ### Adds/Removals

    // Ship

    function addShip(index) {
        cells[index].classList.add(ship)
    }

    function removeShip(index) {
        cells[index].classList.remove(ship)
    }

    // Enemy

    function addEnemy(index) {
        cells[index].classList.add(enemy)
            // for (let i = 0; i < width * 3; i++) {
            //     if (i % 2 ** 2 === 0) {
            //         cells[index + (i + (width + i))].classList.add(enemy)
            //     }
            //     // i % 2 === 0 && 
            //     //     console.log(index)
            //     // cells[index + (i + width * 2)].classList.add(enemy)
            //     // cells[index + (i + width * 3)].classList.add(enemy)
            //     // cells[index + (i + width * 4)].classList.add(enemy)
            //     // cells[index + (i + (width * 2))].classList.add(enemy)
            //     // cells[index + (i + (width * 4))].classList.add(enemy)
            // }
    }

    // {
    //   for (let i = 0; i < numCells; i++) {
    //     const cell = document.createElement('div')
    //     cell.innerText = i
    //     grid.appendChild(cell)
    //     cells.push(cell)
    //   }

    function removeEnemy(index) {
        cells[index].classList.remove(enemy)
            // for (let i = 0; i < width * 3; i++) {
            //     if (i % 2 ** 2 === 0) {
            //         cells[index + (i + (width + i))].classList.remove(enemy)

        //     }
        //     // cells[index + (i + width * 2)].classList.remove(enemy)
        //     // cells[index + (i + width * 3)].classList.remove(enemy)
        //     // cells[index + (i + width * 4)].classList.remove(enemy)

        //     // cells[index + (i + width * 2)].classList.remove(enemy)
        //     // cells[index + (i + (width * 4))].classList.remove(enemy)
        // }
    }


    // Laser

    function addLaser(index) {
        cells[index].classList.add(bam)
    }

    function removeLaser(index) {
        cells[index].classList.remove(bam)
    }
    //   ### Intervals

    // Enemy 

    function enemyMove() {
        setInterval(function interEnemy() {
            for (let i = 0; i < width * totalRowsEnemies; i++) {
                if (i % 2 === 0 && i % width <= totalColumnsEnemies && currentEnemyPos === i - (width * 2)) {
                    addEnemy(currentEnemyPos), currentEnemyPos + i,
                        removeEnemy(currentEnemyPos + i),
                        addEnemy(currentEnemyPos + i)
                }
                // if (currentEnemyPos < numCells - width - 1) {
                //     removeEnemy(currentEnemyPos), currentEnemyPos++
                // } 
                else {
                    console.log('Game Over')
                }
            }
        }, 2000)
    }

    // Laser

    function laserMove(index) {
        setInterval(function interLaser() {
            if (index > width - 1) {
                removeLaser(index),
                    index -= width,
                    addLaser(index)
            } else {
                removeLaser(index)
            }
        }, 50)
    }

    // ### Grid creator (DONT TOUCH!)

    function GridCreator() {
        for (let i = 0; i < numCells; i++) {
            const cell = document.createElement('div')
            cell.innerText = i
            grid.appendChild(cell)
            cells.push(cell)
        }
        addShip(startShip)
        enemyMove()

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


        if (key === right && currentShipPos < numCells - 1) {
            currentShipPos++
        } else if (key === left && currentShipPos > numCells - width) {
            currentShipPos--
        } else if (key === space) {
            console.log('BAM!')
            laserMove(currentShipPos)
        } else if (key === h) {
            console.log(totalColumnsEnemies)
        } else {
            console.log('Pong sound!')
        }
        addShip(currentShipPos)
    }


    // START

    GridCreator()

    document.addEventListener('keydown', movingShip)

}

window.addEventListener('DOMContentLoaded', init)