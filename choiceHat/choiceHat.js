const lumosFormContainer = document.createElement("div");
lumosFormContainer.className = "lumos-form-container";
document.body.appendChild(lumosFormContainer);

const lumosForm = document.createElement("form");
lumosForm.setAttribute("method", "");
lumosForm.setAttribute("action", "");
lumosForm.className = "lumos-form";
lumosFormContainer.appendChild(lumosForm);

const lumosFormLabel = document.createElement("label");
lumosFormLabel.textContent = "Hmm... il faudrait un peu de lumière ici...";
lumosFormLabel.style.color = "white";
lumosFormLabel.className = "lumos-form-label";
lumosForm.appendChild(lumosFormLabel);

const lumosFormInput = document.createElement("input");
lumosFormInput.setAttribute("type", "text");
lumosFormInput.setAttribute("name", "lumosInput");
lumosFormInput.setAttribute("id", "lumosInput");
lumosFormInput.className = "lumos-form-input";
lumosForm.appendChild(lumosFormInput);

const btnLumos = document.createElement("button");
btnLumos.textContent = "Jeter le sort !";
btnLumos.setAttribute("type", "submit");
btnLumos.className = "btn-lumos";
lumosForm.appendChild(btnLumos);

const wandLumos = document.createElement("img");
wandLumos.src = "/assets/images/wand.png";
wandLumos.className = "wand-lumos";
document.body.appendChild(wandLumos);

lumosForm.onsubmit = function (event) {
  event.preventDefault();
  const lumos = lumosFormInput.value;
  let count = 0;
  document.body.addEventListener("click", () => {
    count++;
    if (count === 1 && lumos === "lumos") {
      afterLumos();
      lumosFormContainer.remove();
      wandLumos.remove();
    }
  });
};

function afterLumos() {
  document.body.classList.remove("bodyClass");
  document.body.classList.add("bodyClassAfter");

  const containerTitle = document.createElement("div");
  containerTitle.className = "container-title";
  document.body.appendChild(containerTitle);

  const title = document.createElement("h1");
  title.textContent = "C'est le moment du choix !";
  title.setAttribute("id", "choice-title");
  containerTitle.appendChild(title);

  const containerImgHat = document.createElement("div");
  containerImgHat.className = "container-img-hat";
  document.body.appendChild(containerImgHat);

  const imageHat = document.createElement("img");
  imageHat.src = "/assets/images/choicehat.png";
  imageHat.className = "image-hat";
  containerImgHat.appendChild(imageHat);

  const containerForm = document.createElement("div");
  containerForm.className = "container-form";
  document.body.appendChild(containerForm);

  const form = document.createElement("form");
  form.setAttribute("method", "");
  form.setAttribute("action", "");
  form.className = "form";
  containerForm.appendChild(form);

  const containerFormName = document.createElement("div");
  containerFormName.className = "container-name";
  form.appendChild(containerFormName);

  const containerFormFirstName = document.createElement("div");
  containerFormFirstName.className = "container-form-firstname";
  containerFormName.appendChild(containerFormFirstName);

  const firstNameLabel = document.createElement("label");
  firstNameLabel.textContent = "Prénom";
  containerFormFirstName.appendChild(firstNameLabel);

  const firstNameForm = document.createElement("input");
  firstNameForm.setAttribute("type", "text");
  firstNameForm.setAttribute("name", "firstName");
  firstNameForm.setAttribute("placeholder", "Harry");
  firstNameForm.setAttribute("id", "firstName");
  containerFormFirstName.appendChild(firstNameForm);

  const containerFormLastName = document.createElement("div");
  containerFormLastName.className = "container-form-lastname";
  containerFormName.appendChild(containerFormLastName);

  const lastNameLabel = document.createElement("label");
  lastNameLabel.textContent = "Nom";
  containerFormLastName.appendChild(lastNameLabel);

  const lastNameForm = document.createElement("input");
  lastNameForm.setAttribute("type", "text");
  lastNameForm.setAttribute("name", "lastName");
  lastNameForm.setAttribute("placeholder", "Potter");
  lastNameForm.setAttribute("id", "lastName");
  containerFormLastName.appendChild(lastNameForm);

  const containerParentQuestion = document.createElement("div");
  containerParentQuestion.className = "container-parent-question";
  form.appendChild(containerParentQuestion);

  const containerQuestion = document.createElement("div");
  containerQuestion.className = "container-question";
  containerParentQuestion.appendChild(containerQuestion);

  const labelQuestion = document.createElement("label");
  labelQuestion.textContent = "Quel est le mot qui te caractérise le plus ?";
  containerQuestion.appendChild(labelQuestion);

  const questionInput = document.createElement("input");
  questionInput.setAttribute("type", "text");
  questionInput.setAttribute("name", "question");
  questionInput.setAttribute("placeholder", "Brave");
  questionInput.setAttribute("id", "question");
  containerQuestion.appendChild(questionInput);

  const btnSend = document.createElement("button");
  btnSend.textContent = "Envoyer";
  btnSend.setAttribute("type", "submit");
  btnSend.className = "btn-form-send"
  containerQuestion.appendChild(btnSend);

  const buttonImage = document.createElement("img");
  buttonImage.src = "/assets/images/owl.png";
  buttonImage.className = "button-owl";
  btnSend.appendChild(buttonImage);

  form.onsubmit = function (event) {
    event.preventDefault();
    containerForm.remove();
    title.textContent = "Bravo !"
    houseCards();
  };
}

function houseCards() {
  const houses = [
    {
      name: "Gryffondor",
      image: "/assets/images/coat-of-arms.png",
      link: "../gryffondor.html",
    },
    {
      name: "Poufsouffle",
      image: "/assets/images/Poufsouffle.png",
      link: "../poufsouffle.html",
    },
    {
      name: "Serdaigle",
      image: "/assets/images/Serdaigle.png",
      link: "../serdaigle.html",
    },
    {
      name: "Serpentard",
      image: "/assets/images/serpentard.png",
      link: "../serpentard.html",
    },
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomHouses = getRandomInt(3);

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  document.body.appendChild(cardContainer);

  const cardImage = document.createElement("img");
  cardImage.src = `${houses[randomHouses].image}`;
  cardImage.className = "image-houses";
  cardContainer.appendChild(cardImage);

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = houses[randomHouses].name;
  cardContainer.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.textContent = `Félicitations, vous êtes admis à ${houses[randomHouses].name}`;
  cardContainer.appendChild(cardText);

  const cardLink = document.createElement("a");
  cardLink.href = `${houses[randomHouses].link}`;
  cardLink.className = "link";
  cardContainer.appendChild(cardLink);
  

  const cardButton = document.createElement("button");
  cardButton.textContent = "C'est parti !";
  cardButton.className = "btn-form-send";
  cardLink.appendChild(cardButton);

  const imageButtonLink = document.createElement("img");
  imageButtonLink.src = "/assets/images/houseslogobutton.png";
  imageButtonLink.className = "button-howgarts";
  cardButton.appendChild(imageButtonLink);
}
