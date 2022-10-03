export function displayCreateAccountDiv(parentDiv) {
    // Create the display for the form to enter username, email, and password
    const createAccountForm_div = document.createElement("div");

    // Username input
    const createAccountFormUsername_input = document.createElement("input");
    createAccountFormUsername_input.setAttribute("id","createAccountFormUsername_value");
    createAccountFormUsername_input.setAttribute("type","text");
    createAccountFormUsername_input.setAttribute("placeholder","Username");

    // Email input
    const createAccountFormEmail_input = document.createElement("input");
    createAccountFormEmail_input.setAttribute("id","createAccountFormEmail_value");
    createAccountFormEmail_input.setAttribute("type","email");
    createAccountFormEmail_input.setAttribute("placeholder","Email");

    // Password input
    const createAccountFormPassword_input = document.createElement("input");
    createAccountFormPassword_input.setAttribute("id","createAccountFormPassword_value");
    createAccountFormPassword_input.setAttribute("type","password");
    createAccountFormPassword_input.setAttribute("placeholder","Password");

    // Submit button
    const createAccountFormSubmit_button = document.createElement("button");
    createAccountFormSubmit_button.setAttribute("id","createAccountFormSubmit_button")
    createAccountFormSubmit_button.innerText = "Submit";

    // Append the 3 inputs and the 1 button to the form div
    createAccountForm_div.append(createAccountFormUsername_input);
    createAccountForm_div.append(createAccountFormEmail_input);
    createAccountForm_div.append(createAccountFormPassword_input);
    createAccountForm_div.append(createAccountFormSubmit_button);

    // Append the form div to the main page
    parentDiv.append(createAccountForm_div);
}

export function displayDuplicateUsernameError(parentDiv) {
    // Create the display for the form to enter username, email, and password
    const duplicateUsernameError_div = document.createElement("div");
    const duplicateUsernameError_h1 = document.createElement("h1");
    duplicateUsernameError_h1.innerText = "That username already exists, please choose another";

    duplicateUsernameError_div.appendChild(duplicateUsernameError_h1);

    // Append the form div to the main page
    parentDiv.prepend(duplicateUsernameError_div);
}

export function displayDuplicateEmailError(parentDiv) {
    // Create the display for the form to enter username, email, and password
    const duplicateEmailError_div = document.createElement("div");
    const duplicateEmailError_h1 = document.createElement("h1");
    duplicateEmailError_h1.innerText = "That email already exists, please choose another";

    duplicateEmailError_div.appendChild(duplicateEmailError_h1);

    // Append the form div to the main page
    parentDiv.prepend(duplicateEmailError_div);
}
