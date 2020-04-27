
function checkInputLength(value) {
 
    const trimmedValue = value.trim();

    if (trimmedValue.length > 2) {
        return true;
    } else {
        return false;
    }
}

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const firstNameValue = firstName.value;

if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
} else {
    firstNameError.style.display = "block";
}