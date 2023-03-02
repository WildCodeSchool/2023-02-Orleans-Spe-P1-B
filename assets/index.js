const messagePass =
    "Felicitation vous avez trouvé tous les differences!"
const messageNoPass =
    "Veuillez entrer les différences correctes dans les photos."

const differenceInput = document.getElementById("difference");

function myFunction() {
    if (differenceInput.value != 8) {
        alert(messageNoPass);
    } else {
        alert(messagePass);
    }
};