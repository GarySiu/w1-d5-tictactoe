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
for (var i = 0; i < clickTarget.length; i++) {
  clickTarget[i].addEventListener('click', function(){
    switch (getPlayer()) {
      case 0 : this.style.background = "blue"; togglePlayer();
      break;
      default: this.style.background = "red"; togglePlayer();
      break;
    }
  });
}