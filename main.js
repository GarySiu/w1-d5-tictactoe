var clickTarget = document.getElementsByClassName('result');
function getPlayer() {
  var player;
  document.getElementById('turn').innerText === "Player 1's turn" ? player = 0 : player = 1;
  return player;
}
function togglePlayer(){
  getPlayer() === 0 ? document.getElementById('turn').innerText = "Player 2's turn" :
  document.getElementById('turn').innerText = "Player 1's turn";
}
function resetGame() {
  for (var i = 0; i < clickTarget.length; i++) {
    clickTarget[i].style.background = "white";
  }
  document.getElementById('turn').innerText = "Player 1's turn";
}
resetGame();
document.getElementById('reset').addEventListener('click',resetGame);
for (var i = 0; i < clickTarget.length; i++) {
  clickTarget[i].addEventListener('click', function(){
    if (this.style.background !== "white") {
      // console.log("This square is occupied")
      return;
    } else {
      switch (getPlayer()) {
        case 0 : this.style.background = "blue"; togglePlayer();
        break;
        default: this.style.background = "red"; togglePlayer();
        break;
      }
    }
  });
}