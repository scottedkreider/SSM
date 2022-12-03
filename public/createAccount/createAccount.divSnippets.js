export function createAccountFormUsername_div() {
    // Username input
    const createAccountFormUsername_div = document.createElement("div");
    const createAccountFormUsername_input = document.createElement("input");
    createAccountFormUsername_input.setAttribute("id", "createAccountFormUsername_value");
    createAccountFormUsername_input.setAttribute("type", "text");
    createAccountFormUsername_input.setAttribute("class", "entryField");
    createAccountFormUsername_input.setAttribute("placeholder", "Username");
    createAccountFormUsername_input.setAttribute("minlength", "5");
    createAccountFormUsername_input.required = true;
    createAccountFormUsername_div.appendChild(createAccountFormUsername_input);

    return createAccountFormUsername_div;
}

export function createAccountFormEmail_div() {
    // Email input
    const createAccountFormEmail_div = document.createElement("div");
    const createAccountFormEmail_input = document.createElement("input");
    createAccountFormEmail_input.setAttribute("id", "createAccountFormEmail_value");
    createAccountFormEmail_input.setAttribute("type", "email");
    createAccountFormEmail_input.setAttribute("class", "entryField");
    createAccountFormEmail_input.setAttribute("placeholder", "Email");
    createAccountFormEmail_input.required = true;
    createAccountFormEmail_div.appendChild(createAccountFormEmail_input);

    return createAccountFormEmail_div;
}

export function createAccountFormPassword_div() {
    // Password input
    const createAccountFormPassword_div = document.createElement("div");
    const createAccountFormPassword_input = document.createElement("input");
    createAccountFormPassword_input.setAttribute("type", "password");
    createAccountFormPassword_input.setAttribute("id", "createAccountFormPassword_value");
    createAccountFormPassword_input.setAttribute("class", "entryField");
    createAccountFormPassword_input.setAttribute("placeholder", "Password");
    createAccountFormPassword_input.required = true;
    createAccountFormPassword_div.appendChild(createAccountFormPassword_input);

    return createAccountFormPassword_div;
}

export function createAccountFormSubmit_div() {
    // Submit button
    const createAccountFormSubmit_div = document.createElement("div");
    createAccountFormSubmit_div.setAttribute("class", "row justify-content-center")
    const createAccountFormSubmit_button = document.createElement("button");
    createAccountFormSubmit_button.setAttribute("type", "submit")
    createAccountFormSubmit_button.setAttribute("id", "createAccountFormSubmit_button")
    createAccountFormSubmit_button.setAttribute("class", "entryButton");
    createAccountFormSubmit_button.innerText = "Submit";
    createAccountFormSubmit_div.appendChild(createAccountFormSubmit_button);

    return createAccountFormSubmit_div;
}