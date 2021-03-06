var classicButton = document.getElementById('classicButton')
var advancedButton = document.getElementById('advancedButton')
var chooseGameView = document.querySelector('.choose-game-view')
var muteButton = document.querySelector('.mute-button')
var song = document.getElementById('song')
var fightSound = document.getElementById('sound1')
var bleep = document.getElementById('sound2')
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
muteButton.addEventListener('click', function() {
  game.toggleMute()
})
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
  game.playAudio("sound2")
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
   // Had to reintroduce querySelectors and eventListeners here.
   // I assume it's because even though the HTML consists of the same characters
   // it is still technically different HTML...? There must be a DRYer way to do this.
}

function playClassicMode() {
  game.playAudio("sound2")
  game.playAudio("song")
  changeGameButton.classList.remove('hidden')
  chooseGameView.innerHTML =
    `<h1>The Rock, Paper, Scissors</h1>
  <h2>Choose your fighter!</h2>
  <section class="fighters">
    <img class="fighter-icons" id="rock" src="https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/the-rock.png"></img>
    <img class="fighter-icons" id="paper" src="https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/post-it.png"></img>
    <img class="fighter-icons" id="scissors" src="https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/scissors.png"></img>
  </section>`
}

function playAdvancedMode() {
  game.playAudio("sound2")
  game.playAudio("song")
  changeGameButton.classList.remove('hidden')
  chooseGameView.innerHTML =
    `<h1>The Rock, Paper, Scissors</h1>
  <h2>Choose your fighter!</h2>
  <section class="advanced-fighters">
    <img class="advanced-fighter-icons" id="rock" src="https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/the-rock.png"></img>
    <img class="advanced-fighter-icons" id="paper" src="https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/post-it.png"></img>
    <img class="advanced-fighter-icons" id="scissors" src="https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/scissors.png"></img>
    <img class="advanced-fighter-icons" id="lizard" src="https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/iguana.png"></img>
    <img class="advanced-fighter-icons" id="alien" src="https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/flat-alien.png"></img>
  </section>`
}
