
class Game {
  constructor(players) {
    this.players = [players]
    this.gameBoard = {}
  }
  checkForWin() {
    var humanChoice = chooseGameView.childNodes[3].childNodes[0].src
    var cpuChoice = chooseGameView.childNodes[3].childNodes[2].src
    if (humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/the-rock.png' &&
        cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/scissors.png' ||
        humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/the-rock.png' &&
        cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/iguana.png') {
         chooseGameView.childNodes[1].innerText = "You win this one!"
         humanPlayer.wins ++
         humanWins.innerText = `Wins: ${humanPlayer.wins}`
     } else if (humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/scissors.png' &&
          cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/post-it.png' ||
          humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/scissors.png' &&
          cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/iguana.png') {
           chooseGameView.childNodes[1].innerText = "You win this one!"
           humanPlayer.wins ++
           humanWins.innerText = `Wins: ${humanPlayer.wins}`
       } else if (humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/post-it.png' &&
            cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/the-rock.png' ||
            humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/post-it.png' &&
            cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/flat-alien.png') {
             chooseGameView.childNodes[1].innerText = "You win this one!"
             humanPlayer.wins ++
             humanWins.innerText = `Wins: ${humanPlayer.wins}`
          } else if (humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/iguana.png' &&
              cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/post-it.png' ||
              humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/iguana.png' &&
              cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/flat-alien.png') {
               chooseGameView.childNodes[1].innerText = "You win this one!"
               humanPlayer.wins ++
               humanWins.innerText = `Wins: ${humanPlayer.wins}`
           } else if (humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/flat-alien.png' &&
              cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/scissors.png' ||
              humanChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/flat-alien.png' &&
              cpuChoice === 'file:///Users/nick/DwayneJohnson-Paper-Scissors/assets/the-rock.png') {
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
