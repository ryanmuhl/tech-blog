//(PLACEHOLDER) function to gather form data and call our "POST /api/user/login" express route
const loginFormHandler = async function (event) {
    event.preventDefault();
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

  
    //If Username and Password are populated and exist in database,  log in.
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ user_name: username, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
    console.log(event.target)
  };
  console.log('connected')
  
  document
    .querySelector('#sign-in')
    .addEventListener('click', loginFormHandler);