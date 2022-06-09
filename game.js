
class Game {
  constructor(players) {
    this.players = [players]
    this.gameBoard = {}
  }
  checkForWin() {
    var humanChoice = battleArena.childNodes[3].childNodes[0].src
    var cpuChoice = battleArena.childNodes[3].childNodes[2].src
    if (humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/rock.png' &&
        cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/scissors.png') {
          battleArena.childNodes[1].innerText = "You win this one!"
          player.wins ++
        } else if (humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/scissors.png' &&
            cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/post-it.png') {
              battleArena.childNodes[1].innerText = "You win this one!"
              player.wins ++
            } else if (humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/post-it.png' &&
                cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/rock.png') {
                  battleArena.childNodes[1].innerText = "You win this one!"
                  player.wins ++
                }
  }
  checkForDraw() {
    var humanChoice = battleArena.childNodes[3].childNodes[0].src
    var cpuChoice = battleArena.childNodes[3].childNodes[2].src
    if (humanChoice === cpuChoice) {
      battleArena.childNodes[1].innerText = "It's a draw!"
    }
  }
  resetBoard() {

  }
}
