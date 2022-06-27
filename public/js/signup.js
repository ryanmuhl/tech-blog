//(PLACEHOLDER) function to gather form data and call our "POST /api/user/" express route
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(username, password)
    //If User Email and Password are populated,  Log in user.
    if (username && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ user_name: username, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to sign up.');
      }
    }
    console.log(event.target)
  };
  
  console.log('connected')
  document
  .querySelector('#button-signup')
  .addEventListener('click', signupFormHandler);

  function test(event) {
    event.preventDefault();
    console.log ('working');
  }
  document
  .querySelector('#test')
  .addEventListener('click', test)

