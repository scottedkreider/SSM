
// Returns a div-element that contains the login entry field
// The endpoints contain fields with: username, password
function loginEntryField() {
    const entryFieldDiv = document.createElement("div");
    entryFieldDiv.innerHTML = "Goodbye World!";

    const usernameFieldDiv = document.createElement("div");
    const usernameFieldInput = document.createElement("input");
    usernameFieldInput.type = "text";
    usernameFieldInput.placeholder = "username";
    usernameFieldInput.id = "loginUsername";
    usernameFieldDiv.appendChild(usernameFieldInput);

    const passwordFieldDiv = document.createElement("div");
    const passwordFieldInput = document.createElement("input");
    passwordFieldInput.type = "text";
    passwordFieldInput.placeholder = "password";
    usernameFieldInput.id = "loginPassword";
    passwordFieldDiv.appendChild(passwordFieldInput);

    const loginSubmitButtonDiv = document.createElement("div");
    const loginSubmitButton = document.createElement("button");
    loginSubmitButton.innerHTML = "Submit";
    loginSubmitButton.id = "loginSubmitButton";
    loginSubmitButtonDiv.appendChild(loginSubmitButton);

    entryFieldDiv.appendChild(usernameFieldDiv);
    entryFieldDiv.appendChild(passwordFieldDiv);
    entryFieldDiv.appendChild(loginSubmitButton);
    return entryFieldDiv;
}