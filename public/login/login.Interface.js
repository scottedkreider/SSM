import {
    loginAccountInformationUsername_div, loginAccountInformationPassword_div
        ,loginAccountInformationFormSubmit_div
} from "./login.divSnippets.js";

export function displayLoginAccountInformationDiv(parentDiv) {
        // Build a div to hold the login form
        const loginAccountInformationForm_div = document.createElement("div");
        loginAccountInformationForm_div.setAttribute("class","row justify-content-center appPadding");

            // Build a form to enter username and password
            const loginAccountInformationForm_form = document.createElement("form");
            loginAccountInformationForm_form.setAttribute("id","loginAccountInformationForm_form");
            loginAccountInformationForm_form.setAttribute("method","GET");
            loginAccountInformationForm_form.setAttribute("action","/dashboard");

            // Append username input, password input, and submit button to login form
            loginAccountInformationForm_form.appendChild(loginAccountInformationUsername_div());
            loginAccountInformationForm_form.appendChild(loginAccountInformationPassword_div());
            loginAccountInformationForm_form.appendChild(loginAccountInformationFormSubmit_div());

        // Append login form to login form div
        loginAccountInformationForm_div.appendChild(loginAccountInformationForm_form);

    // Append login form div to login div
    parentDiv.appendChild(loginAccountInformationForm_div);
}

export function displayUserNotFoundError(parentDiv) {
    // Create the display for the user not found error
    const userNotFoundError_div = document.createElement("div");
    const userNotFoundError_h1 = document.createElement("h1");
    userNotFoundError_h1.innerText = "Username not found. Please try again.";

    userNotFoundError_div.appendChild(userNotFoundError_h1);

    // Append the error to the top of the page
    parentDiv.prepend(userNotFoundError_div);
}

export function displayInvalidPasswordError(parentDiv) {
    // Create the display for the user not found error
    const invalidPasswordError_div = document.createElement("div");
    const invalidPasswordError_h1 = document.createElement("h1");
    invalidPasswordError_h1.innerText = "Invalid password. Please try again.";

    invalidPasswordError_div.appendChild(invalidPasswordError_h1);

    // Append the form div to the main page
    parentDiv.prepend(invalidPasswordError_div);
}
