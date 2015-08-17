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
    clickTarget[i].innerText = '';
  }
  document.getElementById('turn').innerText = "Player 1's turn";
}
resetGame();
document.getElementById('reset').addEventListener('click',resetGame);
for (var i = 0; i < clickTarget.length; i++) {
  clickTarget[i].addEventListener('click', function(){
    if (this.innerText !== "") {
      // console.log("This square is occupied")
      return;
    } else {
      switch (getPlayer()) {
        case 0 : this.innerText = "x"; togglePlayer();
        break;
        default: this.innerText = "o"; togglePlayer();
        break;
      }
    }
  });
}