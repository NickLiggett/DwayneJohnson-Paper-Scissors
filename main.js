var classicButton = document.getElementById('classicButton')
var advancedButton = document.getElementById('advancedButton')
var chooseGameView = document.querySelector('.choose-game-view')
var fighterIcons = document.querySelectorAll('.fighter-icons')
var results = document.querySelector('.player-vs-cpu')
var playerResult = document.getElementById('playerResult')
var cpuResult = document.getElementById('cpuResult')
var cpuWins = document.getElementById('cpuWins')
var cpuToken = document.getElementById('cpuToken')
var humanToken = document.getElementById('humanToken')
var humanSection = document.getElementById('changeGameButton')
var humanWins = document.getElementById('humanWins')
var humanName = document.getElementById('humanName')

classicButton.addEventListener('click', playClassicMode)
advancedButton.addEventListener('click', playAdvancedMode)
chooseGameView.addEventListener('click', function(event) {
  humanPlayer.takeTurn(event)
})
humanSection.addEventListener('click', function(event) {
  showHome(event)
})

var game = new Game([humanPlayer, cpuPlayer])

humanName.innerText = humanPlayer.name
humanToken.src = humanPlayer.token
cpuName.innerText = cpuPlayer.name
cpuToken.src = cpuPlayer.token

function showHome(event) {
  changeGameButton.classList.add('hidden')
  chooseGameView.innerHTML =
    `    <h1>The Rock, Paper, Scissors</h1>
        <h2>Choose your game!</h2>
        <section class="button-section">
          <button class="choose-game-buttons" id="classicButton">
            <article class="mode-title">Classic</article>
            <article>The Rock > Scissors</article>
            <article>Paper > The Rock</article>
            <article>Scissors > Paper</article>
          </button>
          <button class="choose-game-buttons" id="advancedButton">
            <article class="mode-title">Advanced</article>
            <article>The Rock > Scissors & Lizard</article>
            <article>Paper > The Rock & Alien</article>
            <article>Scissors > Paper & Lizard</article>
            <article>Lizard > Paper & Alien</article>
            <article>Alien > The Rock & Scissors</article>
          </button>
        </section>`
  var classicButton = document.getElementById('classicButton')
  var advancedButton = document.getElementById('advancedButton')
  classicButton.addEventListener('click', playClassicMode)
  advancedButton.addEventListener('click', playAdvancedMode)
}

function playClassicMode() {
  changeGameButton.classList.remove('hidden')
  chooseGameView.innerHTML =
    `<h1>The Rock, Paper, Scissors</h1>
  <h2>Choose your fighter!</h2>
  <section class="fighters">
    <img class="fighter-icons" id="rock" src="./assets/the-rock.png"></img>
    <img class="fighter-icons" id="paper" src="./assets/post-it.png"></img>
    <img class="fighter-icons" id="scissors" src="./assets/scissors.png"></img>
  </section>`
}

function playAdvancedMode() {
  changeGameButton.classList.remove('hidden')
  chooseGameView.innerHTML =
    `<h1>The Rock, Paper, Scissors</h1>
  <h2>Choose your fighter!</h2>
  <section class="advanced-fighters">
    <img class="advanced-fighter-icons" id="rock" src="./assets/the-rock.png"></img>
    <img class="advanced-fighter-icons" id="paper" src="./assets/post-it.png"></img>
    <img class="advanced-fighter-icons" id="scissors" src="./assets/scissors.png"></img>
    <img class="advanced-fighter-icons" id="lizard" src="./assets/iguana.png"></img>
    <img class="advanced-fighter-icons" id="alien" src="./assets/flat-alien.png"></img>
  </section>`
}
