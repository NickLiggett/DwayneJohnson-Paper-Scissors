var classicButton = document.querySelector('#classicButton')
var chooseGameView = document.querySelector('.choose-game-view')
var fighterIcons = document.querySelectorAll('.fighter-icons')
var results = document.querySelector('.player-vs-cpu')
var playerResult = document.getElementById('playerResult')
var cpuResult = document.getElementById('cpuResult')
var humanSection = document.getElementById('changeGameButton')
var humanWins = document.getElementById('humanWins')
var cpuWins = document.getElementById('cpuWins')

classicButton.addEventListener('click', playClassicMode)
chooseGameView.addEventListener('click', function(event) {
  fight(event)
})
humanSection.addEventListener('click', function(event) {
  showHome(event)
})

var game = new Game()
var humanPlayer = new Player()
var cpuPlayer = new Player()
var rockIcon = 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/rock.png'
var paperIcon = 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/post-it.png'
var scissorIcon = 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/scissors.png'
var options = [rockIcon, paperIcon, scissorIcon]

function showHome(event) {
    chooseGameView.innerHTML =
    `<h1>Rock, Paper, Scissors</h1>
      <h2>Choose your game!</h2><section class="button-section">
        <button class="choose-game-buttons" id="classicButton">
          <text>Classic</text><text>Rock > Scissors</text>
          <text>Scissors > Paper</text><text>Paper > Rock</text></button>
        <button class="choose-game-buttons" id="advancedButton">Advanced</button></section>`
        var classicButton = document.querySelector('#classicButton')
        classicButton.addEventListener('click', playClassicMode)
}

function playClassicMode() {
  chooseGameView.innerHTML =
  `<h1>Rock, Paper, Scissors</h1>
  <h2>Choose your fighter!</h2>
  <section class="fighters">
    <img class="fighter-icons" id="rock" src="./assets/rock.png"></img>
    <img class="fighter-icons" id="paper" src="./assets/post-it.png"></img>
    <img class="fighter-icons" id="scissors" src="./assets/scissors.png"></img>
  </section>`
}

function timeout() {
  chooseGameView.innerHTML =
  `<h1>Rock, Paper, Scissors</h1>
  <h2>Choose your fighter!</h2>
  <section class="fighters">
    <img class="fighter-icons" id="rock" src="./assets/rock.png"></img>
    <img class="fighter-icons" id="paper" src="./assets/post-it.png"></img>
    <img class="fighter-icons" id="scissors" src="./assets/scissors.png"></img>
  </section>`
}

function fight(event) {
  var choice = event.target.src
  var rand = Math.floor(Math.random() * 3)
  if (event.target.classList.contains('fighter-icons')) {
  chooseGameView.innerHTML = `<h1>Rock, Paper, Scissors</h1><h2>Oof.. try again!</h2>
  <section class="player-vs-cpu"><img class="result" id="playerResult" src=${choice}>
  </img><img class="result" id="cpuResult" src=${options[rand]}></img></section>`
  game.checkForDraw()
  game.checkForWin()
  window.setTimeout(timeout, 1000)
}
}
