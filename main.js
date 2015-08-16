var clickTarget = document.getElementsByClassName('result');
for (var i = 0; i < clickTarget.length; i++) {
  clickTarget[i].addEventListener('click', function(){
    this.style.background = "blue";
  });
}