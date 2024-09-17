document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  
  
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    //Fetch
    fetch('users.json')
      .then(response => response.json())
      .then(data => {
        //Map
        const user = data.map(user => {
          if (user.username === username && user.password === password) {
            return user;
          }
        }).filter(user => user !== undefined);  
  
        
        const messageDiv = document.getElementById('message');
        if (user.length > 0) {
          messageDiv.innerHTML = `<p>Login successful. Welcome, ${username}!</p>`;
        } else {
          messageDiv.innerHTML = '<p>Invalid username or password. Please try again.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  });
  