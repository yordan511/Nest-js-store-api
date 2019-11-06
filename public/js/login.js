const button = document.querySelector('.login-button');

button.addEventListener('click', login);

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
      body: JSON.stringify({ username: 'john', password: 'changeme' }),
    });
    const accessCode = await response.json().access_token;
    console.log('TCL: login -> accessCode', accessCode);
  } catch (error) {
    console.log(error);
  }
}
