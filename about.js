const animatedText = document.querySelector('.animated-text');
const text = animatedText.querySelector('p');
const splitText = text.textContent.split('');
text.textContent = '';

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

const spans = text.querySelectorAll('span');
let char = 0;

function animateText() {
  if (char < spans.length) {
    spans[char].classList.add('active');
    char++;

