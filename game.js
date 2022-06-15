
var humanPlayer = new Player('Ash', './assets/brain_token.png')
var cpuPlayer = new Player('Computron', './assets/cpu_brain.png')

var icons = ['https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/the-rock.png',
 'https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/post-it.png',
  'https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/scissors.png',
   'https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/iguana.png',
    'https://nickliggett.github.io/DwayneJohnson-Paper-Scissors/assets/flat-alien.png'
]

class Game {
  constructor(players) {
    this.players = [players]
  }
  checkForWin() {
    var humanChoice = chooseGameView.childNodes[3].childNodes[0].src
    var cpuChoice = chooseGameView.childNodes[3].childNodes[2].src
    if (humanChoice === icons[0] && cpuChoice === icons[2] ||
      humanChoice === icons[0] && cpuChoice === icons[3]) {
      chooseGameView.childNodes[1].innerText = "FLAWLESS VICTORY"
      humanPlayer.wins++
      humanWins.innerText = `Wins: ${humanPlayer.wins}`
    } else if (humanChoice === icons[2] && cpuChoice === icons[1] ||
      humanChoice === icons[2] && cpuChoice === icons[3]) {
      chooseGameView.childNodes[1].innerText = "FLAWLESS VICTORY"
      humanPlayer.wins++
      humanWins.innerText = `Wins: ${humanPlayer.wins}`
    } else if (humanChoice === icons[1] && cpuChoice === icons[0] ||
      humanChoice === icons[1] && cpuChoice === icons[4]) {
      chooseGameView.childNodes[1].innerText = "FLAWLESS VICTORY"
      humanPlayer.wins++
      humanWins.innerText = `Wins: ${humanPlayer.wins}`
    } else if (humanChoice === icons[3] && cpuChoice === icons[1] ||
      humanChoice === icons[3] && cpuChoice === icons[4]) {
      chooseGameView.childNodes[1].innerText = "FLAWLESS VICTORY"
      humanPlayer.wins++
      humanWins.innerText = `Wins: ${humanPlayer.wins}`
    } else if (humanChoice === icons[4] && cpuChoice === icons[2] ||
      humanChoice === icons[4] && cpuChoice === icons[0]) {
      chooseGameView.childNodes[1].innerText = "FLAWLESS VICTORY"
      humanPlayer.wins++
      humanWins.innerText = `Wins: ${humanPlayer.wins}`
    } else if (humanChoice !== cpuChoice) {
      cpuPlayer.wins++
      cpuWins.innerText = `Wins: ${cpuPlayer.wins}`
    } else {
      chooseGameView.childNodes[1].innerText = "SUDDEN DEATH"
    }
  }   // Thought of possibly using a switch statement above, but
      // no time to attempt. Would it even be "better"?

  playAudio(sound) {
  muteButton.classList.remove('hidden')
  var sound = document.getElementById(sound)
  sound.play()
}

  toggleMute() {
    if (song.muted === true &&
        fightSound.muted === true &&
        bleep.muted === true) {
          game.playAudio("sound2")
          song.muted = false
          fightSound.muted = false
          bleep.muted = false
          muteButton.innerText = "mute"
          return
  }
    song.muted = true
    fightSound.muted = true
    bleep.muted = true
    muteButton.innerText = "unmute"
}

  resetBoard(mode) {
    window.setTimeout(mode, 1900)
  }
}
