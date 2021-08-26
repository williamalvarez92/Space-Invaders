function init() {

    // Elements

    const grid = document.querySelector('.grid')
        //Battlefield
    const width = 20
    const numCells = width * width
    const cells = []

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
    let currentLaser = startLaser


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

    //Ship movements

    function addShip(index) {
        cells[index].classList.add(ship)
    }

    function removeShip(index) {
        cells[index].classList.remove(ship)
    }

    function addEnemy(index) {
        cells[index].classList.add(enemy)
    }

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
            console.log(currentShipPos)
            ShipLaserAdd(currentShipPos)
        } else if (key === h) {
            Shipshoot(currentShipPos)
        } else {
            console.log('Pong sound!')
        }
        addShip(currentShipPos)

    }

    // Ship laser movements

    function ShipLaserAdd(currentShipPos) {
        console.log('BAM')
        cells[currentShipPos - width].classList.add(bam)
    }

    function ShipLaserRemove(currentShipPos) {
        console.log('BAM')
        cells[currentShipPos - width].classList.remove(bam)
    }

    function Shipshoot(currentShipPos) {
        // for (let i = 0; i < width; i++) {
        if (cells[currentShipPos - width].targent.classList.contains('ship')) {
            console.log('Beep')
        } else {
            console.log('nah')
        }
    }
    // }




    GridCreator(currentShipPos)


    document.addEventListener('keydown', movingShip)




}

window.addEventListener('DOMContentLoaded', init)