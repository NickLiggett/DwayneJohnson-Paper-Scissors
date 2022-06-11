
class Game {
  constructor(players) {
    this.players = [players]
    this.gameBoard = {}
  }
  checkForWin() {
    var humanChoice = chooseGameView.childNodes[3].childNodes[0].src
    var cpuChoice = chooseGameView.childNodes[3].childNodes[2].src
    if (humanChoice === icons[0] && cpuChoice === icons[2] ||
        humanChoice === icons[0] && cpuChoice === icons[3]) {
         chooseGameView.childNodes[1].innerText = "You win this one!"
         humanPlayer.wins ++
         humanWins.innerText = `Wins: ${humanPlayer.wins}`
     } else if (humanChoice === icons[2] && cpuChoice === icons[1] ||
          humanChoice === icons[2] && cpuChoice === icons[3]) {
           chooseGameView.childNodes[1].innerText = "You win this one!"
           humanPlayer.wins ++
           humanWins.innerText = `Wins: ${humanPlayer.wins}`
       } else if (humanChoice === icons[1] && cpuChoice === icons[0] ||
            humanChoice === icons[1] && cpuChoice === icons[4]) {
             chooseGameView.childNodes[1].innerText = "You win this one!"
             humanPlayer.wins ++
             humanWins.innerText = `Wins: ${humanPlayer.wins}`
          } else if (humanChoice === icons[3] && cpuChoice === icons[1] ||
              humanChoice === icons[3] && cpuChoice === icons[4]) {
               chooseGameView.childNodes[1].innerText = "You win this one!"
               humanPlayer.wins ++
               humanWins.innerText = `Wins: ${humanPlayer.wins}`
           } else if (humanChoice === icons[4] && cpuChoice === icons[2] ||
              humanChoice === icons[4] && cpuChoice === icons[0]) {
                chooseGameView.childNodes[1].innerText = "You win this one!"
                humanPlayer.wins ++
                humanWins.innerText = `Wins: ${humanPlayer.wins}`
            } else if (humanChoice !== cpuChoice) {
                cpuPlayer.wins ++
                cpuWins.innerText = `Wins: ${cpuPlayer.wins}`
              }
  }
  checkForDraw() {
    var humanChoice = chooseGameView.childNodes[3].childNodes[0].src
    var cpuChoice = chooseGameView.childNodes[3].childNodes[2].src
    if (humanChoice === cpuChoice) {
      chooseGameView.childNodes[1].innerText = "It's a draw!"
    }
  }

  resetBoard(mode) {
    window.setTimeout(mode, 1000)
  }
}

var humanPlayer = new Player('Tim', './assets/brain_token.png')
var cpuPlayer = new Player('Computron', './assets/cpu_brain.png')

var icons = ['file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/the-rock.png',
 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/post-it.png',
  'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/scissors.png',
   'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/iguana.png',
    'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/flat-alien.png']
