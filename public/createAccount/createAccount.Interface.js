import {
    createAccountFormSubmit_div, createAccountFormPassword_div
        ,createAccountFormEmail_div, createAccountFormUsername_div
    } from "./createAccount.divSnippets.js";

export function displayCreateAccountDiv(parentDiv) {
    const loginTitleDiv = document.createElement("h1");
    loginTitleDiv.innerText = "Create Account";
    parentDiv.appendChild(loginTitleDiv);

    // Create the display for the form to enter username, email, and password
    const createAccountForm_div = document.createElement("div");
    createAccountForm_div.setAttribute("class","row justify-content-center");

        // Account information form
        const createAccountForm_form = document.createElement("form");
        createAccountForm_form.setAttribute("id","createAccountForm_form");
        createAccountForm_form.setAttribute("method","GET");
        createAccountForm_form.setAttribute("action","/");

        // Append the 3 inputs and the 1 button to the form div
        createAccountForm_form.append(createAccountFormUsername_div());
        createAccountForm_form.append(createAccountFormEmail_div());
        createAccountForm_form.append(createAccountFormPassword_div());
        createAccountForm_form.append(createAccountFormSubmit_div());

    createAccountForm_div.appendChild(createAccountForm_form);

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
