const btn = document.querySelector('.btn-no');
const glove = document.querySelector('.gif-love');
const g = document.querySelector('.gif');


btn.addEventListener('mouseover', function() {
  glove.style.display = 'none';
  g.style.display = 'flex';
  btn.style.position = 'absolute';
  btn.style.left = '100px'; // replace with desired x-coordinate
  btn.style.top = '100px'; // replace with desired y-coordinate


});

btn.addEventListener('mouseout', function() {
    glove.style.display = 'flex';
    g.style.display = 'none';
  btn.style.position = 'static';
  
});

const yes = document.querySelector('.btn-yes');

const blure = document.querySelector('.blure');
const answer = document.querySelector('.answer-yes');

yes.onclick = function(){
    blure.style.display = 'flex';
    answer.style.display = 'flex';
  }