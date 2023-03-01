const lumosFormContainer = document.createElement("div");
lumosFormContainer.className = "lumos-form-container";
document.body.appendChild(lumosFormContainer);

const lumosForm = document.createElement("form");
lumosForm.setAttribute("method", "");
lumosForm.setAttribute("action", "");
lumosFormContainer.appendChild(lumosForm);

const lumosFormLabel = document.createElement("label");
lumosFormLabel.textContent = "Texte blablabal";
lumosFormLabel.style.color = "white";
lumosForm.appendChild(lumosFormLabel);

const lumosFormInput = document.createElement("input");
lumosFormInput.setAttribute("type", "text");
lumosFormInput.setAttribute("name", "lumosInput");
lumosFormInput.setAttribute("id", "lumosInput");
lumosForm.appendChild(lumosFormInput);

const btnLumos = document.createElement("button");
btnLumos.textContent = "Jeter le sort !";
btnLumos.setAttribute("type", "submit");
lumosForm.appendChild(btnLumos);

lumosForm.onsubmit = function (event) {
  event.preventDefault();
  const lumos = lumosFormInput.value;
  let count = 0;
  document.body.addEventListener("click", () => {
    count++;
    if (count === 1 && lumos === "lumos") {
      afterLumos();
      lumosFormContainer.remove();
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
  containerTitle.appendChild(title);

  const containerImgHat = document.createElement("div");
  containerImgHat.className = "container-img-hat";
  document.body.appendChild(containerImgHat);

  const imageHat = document.createElement("img");
  imageHat.src =
    "https://i1.sndcdn.com/artworks-TyY4eXLEYK44Ld9o-TxWvnw-t240x240.jpg";
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
  containerForm.appendChild(containerParentQuestion);

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

  const aBtnSend = document.createElement("a");
  aBtnSend.href = "";
  aBtnSend.className = "btn-send";
  containerForm.appendChild(aBtnSend);

  const btnSend = document.createElement("button");
  btnSend.textContent = "Envoyer";
  aBtnSend.appendChild(btnSend);
}
