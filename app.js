function init() {

    // Elements

    const grid = document.querySelector('.grid')
        //Battlefield
    const width = 20
    const numCells = width * width
    const cells = []
    const ShootingCells = []

    // Consts
    const ship = 'ship'
    const enemy = 'enemy'
    const bam = 'bam'
    const numAliens = 1

    // Positioning
    //Ship
    const shipStatPos = numCells - width
    let currentShipPos = shipStatPos
        //Ship laser
    const startLaser = currentShipPos - width
    const currentLaser = startLaser
        //Enemy position
    const EnemyPos = 0
    const currentEnemyPos = EnemyPos


    // Grid creator
    function GridCreator() {
        for (let i = 0; i < numCells; i++) {
            const cell = document.createElement('div')
            cell.innerText = i
            grid.appendChild(cell)
            cells.push(cell)
        }
        addShip(shipStatPos)
        addEnemy(0)
    }

    //  Adds/Removals

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


    function RemoveEnemy(index) {
        cells[index].classList.remove(enemy)
    }
    // Ship laser

    function ShipLaserAdd() {
        console.log(startLaser)
            // cells[index - width].classList.add(bam)
        for (let i = 0; numCells - width; i++) {
            cells[i * width].classList.add(bam)
        }
    }












    // CONTROlS (DONT TOUCH!)

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
            ShipLaserAdd(0)
        } else {
            console.log('Pong sound!')
        }
        addShip(currentShipPos)


    }

    GridCreator(currentShipPos)


    document.addEventListener('keydown', movingShip)




}

window.addEventListener('DOMContentLoaded', init)