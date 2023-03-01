console.log('Contact page loaded.');

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted!');
});
