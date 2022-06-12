class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
  }
  takeTurn() {
    var choice = event.target.src
    if (event.target.classList.contains('fighter-icons')) {
      var rand = Math.floor(Math.random() * 3)
      chooseGameView.innerHTML = `<h1>The Rock, Paper, Scissors</h1><h2>You Die</h2>
    <section class="player-vs-cpu"><img class="result" id="playerResult" src=${choice}>
    </img><img class="result" id="cpuResult" src=${icons[rand]}></img></section>`
      game.checkForWin()
      game.resetBoard(playClassicMode)
    } else if (event.target.classList.contains('advanced-fighter-icons')) {
      var rand = Math.floor(Math.random() * 5)
      chooseGameView.innerHTML = `<h1>The Rock, Paper, Scissors</h1><h2>You Die</h2>
    <section class="player-vs-cpu"><img class="result" id="playerResult" src=${choice}>
    </img><img class="result" id="cpuResult" src=${icons[rand]}></img></section>`
      game.checkForWin()
      game.resetBoard(playAdvancedMode)
    }
  }
}
