function init() {

    // ### Elements

    const grid = document.querySelector('.grid')

    /// ### Grid

    const width = 20
    const numCells = width * width
    const cells = []

    /// ### Consts

    const ship = 'ship'
    const enemy = 'enemy'
    const bam = 'bam'
    const numAliens = 1

    // ### Positioning

    //Ship
    const startShip = numCells - width
    let currentShipPos = startShip

    //Enemy
    const startEnemy = 0
    let currentEnemyPos = startEnemy
    const enemyRow = width - 1

    //Laser
    const startLaser = startShip
    let currentLaserPos = startLaser

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
    }

    function removeEnemy(index) {
        cells[index].classList.remove(enemy)
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
        setInterval(function interEnemy(index) {
            if (currentEnemyPos !== index && currentEnemyPos < numCells - width - 1) {
                removeEnemy(currentEnemyPos), currentEnemyPos++
            } else {
                console.log('Game Over')
                console.log(currentEnemyPos)
            }
            addEnemy(currentEnemyPos)
        }, 1000)
    }

    // Laser

    function laserMove() {
        setInterval(function interLaser(index) {
            if (currentShipPos !== index && currentShipPos > width) {
                removeLaser(currentShipPos), currentShipPos -= width
            } else {
                console.log('Game Over')
            }
            addLaser(currentShipPos)

        }, 10)
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
        addEnemy(startEnemy)
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
            laserMove()
        } else if (key === h) {
            enemyMove()
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