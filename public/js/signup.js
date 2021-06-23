async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const platform = document.querySelector('#platform-signup').value.trim();

    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password,
          platform
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        const data = await response.json()
        if (data.errors[0] === 'user.email must be unique') {
          alert('That email is already in use.');
        }

        if (data.errors[0] === 'Validation isAlphanumeric on username failed') {
          alert('Username may only contain alphanumeric characters.')
        }

        if (data.errors[0] === 'user.username must be unique') {
          alert('That username is already in use.')
        }
      }
    }
  }
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);