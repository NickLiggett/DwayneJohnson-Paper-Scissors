var classicButton = document.getElementById('classicButton')
var battleArena = document.querySelector('.battle-arena')
var fighterIcons = document.querySelectorAll('.fighter-icons')
var results = document.querySelector('.player-vs-cpu')
var playerResult = document.getElementById('playerResult')
var cpuResult = document.getElementById('cpuResult')
var humanSection = document.getElementById('changeGameButton')

classicButton.addEventListener('click', playClassicMode)
battleArena.addEventListener('click', function(event) {
  fight(event)
})
humanSection.addEventListener('click', function(event) {
  showHome(event)
})

var game = new Game()
var player = new Player()
var rockIcon = 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/rock.png'
var paperIcon = 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/post-it.png'
var scissorIcon = 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/scissors.png'

var options = [rockIcon, paperIcon, scissorIcon]



function timeout() {
  battleArena.innerHTML =
  `<h1>Rock, Paper, Scissors</h1>
  <h2>Choose your fighter!</h2>
  <section class="fighters">
    <img class="fighter-icons" id="rock" src="./assets/rock.png"></img>
    <img class="fighter-icons" id="paper" src="./assets/post-it.png"></img>
    <img class="fighter-icons" id="scissors" src="./assets/scissors.png"></img>
  </section>`
}

function showHome(event) {
    battleArena.innerHTML =
    `<h1>Rock, Paper, Scissors</h1>
      <h2>Choose your game!</h2><section class="button-section">
        <button class="choose-game-buttons" id="classicButton">
          <text>Classic</text><text>Rock > Scissors</text>
          <text>Scissors > Paper</text><text>Paper > Rock</text></button>
        <button class="choose-game-buttons" id="advancedButton">Advanced</button></section>`
}

function playClassicMode() {
  battleArena.innerHTML =
  `<h1>Rock, Paper, Scissors</h1>
  <h2>Choose your fighter!</h2>
  <section class="fighters">
    <img class="fighter-icons" id="rock" src="./assets/rock.png"></img>
    <img class="fighter-icons" id="paper" src="./assets/post-it.png"></img>
    <img class="fighter-icons" id="scissors" src="./assets/scissors.png"></img>
  </section>`
}

function fight(event) {
  console.log(event.target.id)
  var choice = event.target.src
  if (event.target.classList.contains('fighter-icons')) {
  battleArena.innerHTML = `<h1>Rock, Paper, Scissors</h1><h2>Oof.. try again!</h2>
  <section class="player-vs-cpu"><img class="result" id="playerResult" src=${choice}>
  </img><img class="result" id="cpuResult" src=${options[randomNum()]}></img></section>`
  game.checkForDraw()
  game.checkForWin()
  window.setTimeout(timeout, 1000)
}
}

function randomNum() {
  return Math.floor(Math.random() * 3)
}
