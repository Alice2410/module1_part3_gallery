const basicGalleryURL = 'https://hjdjs55gol.execute-api.us-east-1.amazonaws.com/api/gallery';

let tokenObject = JSON.parse(localStorage.getItem("token"));
let pageNumber = window.location.search;
setInterval(checkTokenIs, 300000);
let linksList = document.getElementById('links');
linksList.addEventListener("click", (e) => {
    let number = e.target.textContent;
    window.location.href = "gallery.html" + "?page=" + number;
});
goToPage();

function goToPage() { 
let requestGalleryURL = basicGalleryURL + window.location.search;
fetch( requestGalleryURL,
    {
        method: "GET",
        headers: {
            Authorization: tokenObject.token
        }
    })
    .then((response) => {

        if (response.ok) {
            return response;
        } else {
            throw new Error(`${response.status} — ${response.statusText}`);
        }
    })
    .then((response) => response.json())
    .then((imagesObject) => createImages(imagesObject))
    /*.then(() => makeHref())*/
    .catch((error) => {
        console.log(error);
        alert(error);
    })
}

function createImages(imagesObject) {
        imagesArray = imagesObject.objects;
        let imageSection = document.getElementById("photo-section");

        for ( i = 0; i < imagesArray.length; i++) {
            let myImage = document.createElement('img')
            myImage.src = imagesArray[i];
            imageSection.append(myImage);
        }
}

function checkTokenIs() {
        if ((Date.now() - localStorage.tokenReceiptTime) >= 600000) {
            localStorage.removeItem('token');
            localStorage.removeItem('tokenReceiptTime');
            redirectToAuthorization();
        }
}

function redirectToAuthorization() {
        let currentPage = window.location;
        let searchParam = currentPage.search;
        window.location.href = "index.html" + searchParam;
}

/*function makeHref () {
    linksList = document.getElementById('links');
    linksList.addEventListener("click", (e) => {
        let number = e.target.textContent;
        console.log(number);
        window.location.href = "gallery.html" + "?page=" + number;
        goToPage();
    });
}
*/
            
