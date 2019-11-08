const button = document.querySelector('.login-button');

button.addEventListener('click', login);

const username = document.querySelector('input[type=text]');
const password = document.querySelector('input[type=password]');

async function login() {
  try {
    const response = await fetch('./auth/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });
    const json = await response.json();
    const myStorage = window.localStorage;
    myStorage.setItem('token', json.access_token);
    if (response.redirected) {
      let myHeaders = new Headers();
      myHeaders.set('Authorization', 'Beader' + json.access_token);
      document.location.href = response.url;
    }
  } catch (error) {
    console.log(error);
  }
}
