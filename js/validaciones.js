/* NEWSLETTER VALIDATION */

const suscribeNewsletter = (event) => {
    event.preventDefault();

    const newsletterFormEl = document.getElementById("newsletterForm");
    const newsletterInput = document.getElementById("newsletterInput");
    const suscribedBoxEl = document.getElementById("suscribed");
    const errorMsgEl = document.getElementById("errorMessage");

    if (!newsletterInput.value) {
        alert("El email es obligatorio");
        newsletterInput.focus();
        return false;
    }

    if (emailIsValid(newsletterInput.value)) {
        suscribedBoxEl.classList.add("show");
        suscribedBoxEl.classList.remove("hidden");

        newsletterFormEl.classList.add("hidden");
        newsletterFormEl.classList.remove("show");
    } else {
        errorMsgEl.classList.add("show");
        newsletterFormEl.classList.add("show");
        newsletterFormEl.classList.remove("hidden");

        suscribedBoxEl.classList.add("hidden");
        suscribedBoxEl.classList.remove("show");
    }
};

/* FOOTER FORM VALIDATION */

const sendMessage = (event) => {
    event.preventDefault();

    const footerNameInput = document.getElementById("footerNameInput");
    const footerEmailInput = document.getElementById("footerEmailInput");
    const footerMsgInput = document.getElementById("footerMsgInput");

    if (!footerNameInput.value) {
        alert("El nombre es obligatorio");
        footerNameInput.focus();
        return false;
    }
    if (!footerEmailInput.value) {
        alert("El email es obligatorio");
        footerEmailInput.focus();
        return false;
    }

    if (
        nameIsValid(footerNameInput.value) &&
        emailIsValid(footerEmailInput.value)
    ) {
        alert("Enviado!");
    } else {
        alert("Hay un error en el nombre o el email");
    }
};

/* DONATE FORM */

const sendDonateMessage = (event) => {
    event.preventDefault();

    const donateNameInput = document.getElementById("donateNameInput");
    const donateSurnameInput = document.getElementById("donateSurnameInput");
    const donateAgeInput = document.getElementById("donateAgeInput");
    const donateEmailInput = document.getElementById("donateEmailInput");
    const donatePhoneInput = document.getElementById("donatePhoneInput");

    /* Check the empty fields */
    if (!donateNameInput.value) {
        alert("El nombre es obligatorio");
        donateNameInput.focus();
        return false;
    }
    if (!donateSurnameInput.value) {
        alert("El apellido es obligatorio");
        donateSurnameInput.focus();
        return false;
    }
    if (!donateAgeInput.value) {
        alert("La edad es obligatoria");
        donateAgeInput.focus();
        return false;
    }
    if (!donateEmailInput.value) {
        alert("El email es obligatorio");
        donateEmailInput.focus();
        return false;
    }
    if (!donatePhoneInput.value) {
        alert("El telefono/celular es obligatorio");
        donatePhoneInput.focus();
        return false;
    }

    /* Validate fields */

    if (
        nameIsValid(donateNameInput.value) &&
        nameIsValid(donateSurnameInput.value) &&
        ageIsValid(donateAgeInput.value) &&
        emailIsValid(donateEmailInput.value) &&
        phoneIsValid(donatePhoneInput.value)
    ) {
        alert("Enviado!");
    } else {
        alert("Hay un error en el formulario, vuelva a intentarlo.");
    }
};

/* REGISTER FORM */

const sendRegisterMessage = (event) => {
    event.preventDefault();

    const parentNameInput = document.getElementById("parentNameInput");
    const parentSurnameInput = document.getElementById("parentSurnameInput");
    const studentNameInput = document.getElementById("studentNameInput");
    const studentSurnameInput = document.getElementById("studentSurnameInput");
    const registerEmailInput = document.getElementById("registerEmailInput");
    const registerPhoneInput = document.getElementById("registerPhoneInput");
    const registerShift = document.getElementById("registerShift");

    console.log(registerShift.value);
    /* Check the empty fields */
    if (!parentNameInput.value) {
        alert("El nombre del padre/madre/tutor es obligatorio");
        parentNameInput.focus();
        return false;
    }
    if (!parentSurnameInput.value) {
        alert("El apellido del padre/madre/tutor es obligatorio");
        parentSurnameInput.focus();
        return false;
    }
    if (!studentNameInput.value) {
        alert("El nombre del alumno es obligatorio");
        studentNameInput.focus();
        return false;
    }
    if (!studentSurnameInput.value) {
        alert("El apellido del alumno es obligatorio");
        studentSurnameInput.focus();
        return false;
    }
    if (!registerEmailInput.value) {
        alert("El email es obligatorio");
        registerEmailInput.focus();
        return false;
    }
    if (!registerPhoneInput.value) {
        alert("El telefono/celular es obligatorio");
        registerPhoneInput.focus();
        return false;
    }

    /* Validate fields */

    if (
        nameIsValid(parentNameInput.value) &&
        nameIsValid(parentSurnameInput.value) &&
        nameIsValid(studentNameInput.value) &&
        nameIsValid(studentSurnameInput.value) &&
        emailIsValid(registerEmailInput.value) &&
        phoneIsValid(registerPhoneInput.value) &&
        shiftIsValid(registerShift.value)
    ) {
        alert("Enviado!");
    } else {
        alert("Hay un error en el formulario, vuelva a intentarlo.");
    }
};

/* VALIDATION FUNCTIONS */

const emailIsValid = (value) => {
    const validEmail = /^\w+([.\-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    return validEmail.test(value) ? true : false;
};
const nameIsValid = (value) => {
    const validName = /^(?=.*[A-Za-z])[A-Za-z\s\-']+$/u;
    return validName.test(value) ? true : false;
};
const ageIsValid = (value) => {
    const validAge = /^(1[89]|[2-9]\d+)$/;
    return validAge.test(value) ? true : false;
};
const phoneIsValid = (value) => {
    const validPhone =
        /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    return validPhone.test(value) ? true : false;
};
const shiftIsValid = (value) => {
    const validShifts = ["mañana", "tarde"];
    return validShifts.includes(value.toLowerCase()) ? true : false;
};
