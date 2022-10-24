// When the form button is clicked
// Select form-input that is required
// And add a new class to it
// Also add a new class to its container
// These classes have CSS styles that indicate unsuccessful validation

const button = document.querySelector(".form-button");

button.addEventListener("click", buttonClicked);

function buttonClicked() {

    const formInputs = document.querySelectorAll(".form-input");
    formInputs.forEach((item) => {
        if (item.hasAttribute("required"))  {
           item.classList.add("form-input-buttonClicked");
           const formInputContainer = item.parentElement;
           formInputContainer.classList.add("form-inputContainer-buttonClicked");
        }
    });
}