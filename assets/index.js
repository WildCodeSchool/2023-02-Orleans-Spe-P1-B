const messagePass =
    "Felicitation vous avez trouvé tous les differences!"
const messageNoPass =
    "Veuillez entrer les différences correctes dans les photos."

let theValue = 10;

function myFunction() {
    if (document.getElementById("difference").validity.customError) {
        alert(messageNoPass);
    } else {
        alert(messagePass);
    }
}
;