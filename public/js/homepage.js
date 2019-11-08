const button = document.querySelector('button');
const messageElement = document.querySelector('.message');

button.addEventListener('click', handleClick);

async function handleClick() {
  const response = await fetch('./foass');
  const message = await response.json();

  messageElement.textContent = message.message;
}
