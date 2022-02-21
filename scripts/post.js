const authorizationForm = document.getElementById('authorization-form');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');

authorizationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
});

function submitForm() { 
    let user = {
        email: userEmail.value,
        password: userPassword.value
    };

    fetch(
        'https://hjdjs55gol.execute-api.us-east-1.amazonaws.com/api/login',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then ((response) => {
             if (response.ok){
                return response;
             } 

            throw new Error(`${response.status} — ${response.statusText}`);
        }
        )
        .then((response) => response.json())
        .then((json) => {
            localStorage.setItem ('token', JSON.stringify(json));
            setTimeout(() => localStorage.removeItem('token'), 600000);
        })
        .catch((error) => console.log(error));
}
