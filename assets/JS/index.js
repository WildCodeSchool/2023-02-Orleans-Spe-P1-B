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
        showElem()
    }
};

function showElem() {
    const divDifference = document.getElementById("nextPage");
    const linkNextPageButton = document.createElement('a');
    linkNextPageButton.href="/choiceHat/choice-hat.html";
    divDifference.appendChild(linkNextPageButton);
    const buttonNextPage = document.createElement('button');
    buttonNextPage.textContent = "Suivant";
    linkNextPageButton.appendChild(buttonNextPage);
}
