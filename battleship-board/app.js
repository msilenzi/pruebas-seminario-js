const SQUARE_SIZE = 30
const SQUARES = 10
const SHIPS = Object.freeze({
  // shipName: shipSize
  carrier: 5,
  batthleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
})

const $playerStatus = document.querySelector('#bbPlayerStatus')
const $adversaryStatus = document.querySelector('#bbAdversaryStatus')
const $playerBoard = document.querySelector('#bbPlayerBoard')
const $adversaryBoard = document.querySelector('#bbAdversaryBoard')
const $inputShip = document.querySelector('#bbShipsSelect')
const $inputDirection = document.querySelector('#bbShipsDirection')
const $inputRow = document.querySelector('#bbShipPositionRow')
const $inputCol = document.querySelector('#bbShipPositionCol')
const $btnConfirmShip = document.querySelector('#bbBtnConfirmShip')
const $bntConfirmAll = document.querySelector('#bbBtnConfimAll')
const $shipPreview = document.querySelector('#bbShipPreview')

const shipPositionsState = Object.keys(SHIPS).reduce((obj, ship) => {
  obj[ship] = { row: 0, col: 0, direction: 'horizontal', positioned: false }
  return obj
}, {})

const shipHitsStateBak = Object.keys(SHIPS).reduce((obj, ship) => {
  obj[ship] = 0
  return obj
}, {})

/*
  Program
*/

document.documentElement.style.setProperty('--square-size', `${SQUARE_SIZE}px`)

renderBoard($playerBoard)
renderBoard($adversaryBoard)

$inputShip.addEventListener('change', handleInputShipChange)
$inputDirection.addEventListener('change', handleInptutShipDirectionChange)
$inputRow.addEventListener('change', handleInputPositionChange)
$inputCol.addEventListener('change', handleInputPositionChange)

/*
  Functions
*/

function renderBoard(board) {
  for (let row = 0; row < SQUARES ** 2; row++) {
    const square = document.createElement('div')
    square.classList.add('bb-board__square')
    board.appendChild(square)
  }
}



function handleInputShipChange() {
  const ship = $inputShip.options[$inputShip.selectedIndex].value

}

function handleInptutShipDirectionChange() {
  const direction = $inputDirection.options[$inputDirection.selectedIndex].value

}

function handleInputPositionChange() {
  const row = $inputRow.value
  const col = $inputCol.value
}