document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = {
            email: (document.getElementById('email') as HTMLInputElement).value,
            password: (document.getElementById('password') as HTMLInputElement).value,
        };
  
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Registration successful:', data);
        })
        .catch(error => {
            console.error('Error registering user:', error);    
        });
    });
});
