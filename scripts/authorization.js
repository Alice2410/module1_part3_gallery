const authorizationForm = document.getElementById('authorization-form');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const loginURL = 'https://hjdjs55gol.execute-api.us-east-1.amazonaws.com/api/login';


authorizationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getTokenData();
});

function getTokenData() { 
    let user = {
        email: userEmail.value,
        password: userPassword.value
    };

    fetch( loginURL,
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
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.token){ 
                return json;
            } else {
                document.getElementById('token-error').innerHTML = 'Ошибка получения токена';
            }
        })
        .then((json) => {
            saveToken(json);
            saveTokenReceiptTime();
        })
        .then(() => redirect())
        .catch((error) => console.log(error));
}

function redirect() {
    const currentPage = window.location;
    const pageNumber = currentPage.search;

    if (pageNumber) {
        window.location.href = "gallery.html" + pageNumber;
    } else {
        window.location.href = "gallery.html" + "?page=1";
    }
}

function saveToken(json) {
    localStorage.setItem ('token', JSON.stringify(json));
}

function saveTokenReceiptTime() {
    let tokenReceiptTime = Date.now();
    localStorage.setItem ('tokenReceiptTime', tokenReceiptTime);
}

