

//// ### CODE CEMETRY  CODE I USED BUT DID NOT WORK


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