const regiasterForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");


const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToLocalStorage = () => {
    localStorage.setItem("users" , JSON.stringify(users));
};


// funciones auxiliares

const isEmpty = (input) => {
    return !input.value.trim().length;
};



const isBetween = (input, min, max) => {
   return input.value.length >= min && input.value.length <= max ;
};

const isEmailValid = (input) => {
    const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return re.test(input.value.trim());
};

{
    name:"Nombre"
    lastName: "Apellido"
    email: "Mail"
    password: "Contraseña"
}

const isExistingEmail = (input) => {
   return users.some((user) => user.email === input.value.trim())
};

const isPassSecure = (input) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return re.test(input.value.trim());
}

const showError = (input ,message) => {
    const formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.style.display = "block";
    error.textContent = message;
};



const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
    const error = formField.querySelector("small");
    error.style.display = "none" ;
    error.textContent = "";

};



// ---------------------------------------------

const checkTextInput = (input) => {
    let valid = false;
    const minCharacters = 3;
    const maxCharacters = 20;

    if(isEmpty(input)) {
        showError(input, "Este campo es obligatorio")
        return
    }

    if(!isBetween(input, minCharacters, maxCharacters)){
        showError(input, `Este campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`);
        return
    }

    showSuccess(input);
    
    valid = true;
    return valid;
};



const checkEmail = (input) => {
    let valid = false;
    
    if(isEmpty(input)){
        showError(input, "El email es obligatorio");
        return;
    }

    if(!isEmailValid(input)) {
        showError(input, "El mail no es válido");
        return
    }

    if(isExistingEmail(input)){
        showError(input, "El mail ya se encuentra registrado");
        return;
    }
    showSuccess(input);
    valid = true;
    return valid;
};


const checkPassword = (input) => {
	let valid = false;
	if (isEmpty(input)) {
		showError(input, "La contraseña es obligatoria");
		return;
	}

	if (!isPassSecure(input)) {
		showError(
			input,
			"La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un simbolo"
		);
		return;
	}

	showSuccess(input);
	valid = true;
	return valid;
};




const submitHandler = (e) => {
    e.preventDefault();
    let isNameValid = checkTextInput(nameInput);
    let isLastNameValid = checkTextInput(lastNameInput);
    let isEmailValid = checkEmail(emailInput);
    let isPasswordValid = checkPassword(passInput);

    let isValidForm=
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid;

    if(isValidForm) {
        users.push({
            name: nameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            password: passInput.value,
        });

        saveToLocalStorage();
        alert("¡Te registraste con exito!");
        window.location.href = "login.html";
    }

    
};


const init = () => {
    regiasterForm.addEventListener("submit" , submitHandler)
    nameInput.addEventListener("input" , () => checkTextInput(nameInput));
    lastNameInput.addEventListener("input" , () => checkTextInput(lastNameInput));
    emailInput.addEventListener("input" , () => checkEmail(emailInput));
    passInput.addEventListener("input" , () => checkPassword(passInput));
};

init();