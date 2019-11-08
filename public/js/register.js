const button = document.querySelector('.login-button');

const username = document.querySelector('input[type=text]');
const password = document.querySelector('input[type=password]');

button.addEventListener('click', register);

async function register() {
  try {
    const response = await fetch('./users', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });

    console.log('Success logging in');
  } catch (error) {
    console.log(error);
  }
}
