export function displayLoginAccountInformationDiv(parentDiv) {
        // Build a div to hold the login form
        const loginAccountInformationForm_div = document.createElement("div");

            // Build a form to enter username and password
            const loginAccountInformationForm_form = document.createElement("form");
            loginAccountInformationForm_form.setAttribute("id","loginAccountInformationForm_form");
            loginAccountInformationForm_form.setAttribute("method","GET");
            loginAccountInformationForm_form.setAttribute("action","/dashboard");

                // Build the username input field
                const loginAccountInformationUsername_div = document.createElement("div");
                const loginAccountInformationUsername_input = document.createElement("input");
                loginAccountInformationUsername_input.setAttribute("type", "text");
                loginAccountInformationUsername_input.setAttribute("id", "loginAccountInformationUsername_input");
                loginAccountInformationUsername_input.setAttribute("class", "entryField")
                loginAccountInformationUsername_input.setAttribute("placeholder", "Username");
                loginAccountInformationUsername_input.setAttribute("minlength", "5");
                loginAccountInformationUsername_div.append(loginAccountInformationUsername_input);

                // Build the password entry field
                const loginAccountInformationPassword_div = document.createElement("div");
                const loginAccountInformationPassword_input = document.createElement("input");
                loginAccountInformationPassword_input.setAttribute("type", "password");
                loginAccountInformationPassword_input.setAttribute("id", "loginAccountInformationPassword_input");
                loginAccountInformationPassword_input.setAttribute("class", "entryField")
                loginAccountInformationPassword_input.setAttribute("placeholder", "Password");
                loginAccountInformationPassword_input.required = true;
                loginAccountInformationPassword_div.append(loginAccountInformationPassword_input);

                // Submit button
                const loginAccountInformationFormSubmit_div = document.createElement("div");
                const loginAccountInformationFormSubmit_button = document.createElement("button");
                loginAccountInformationFormSubmit_button.setAttribute("type", "submit")
                loginAccountInformationFormSubmit_button.setAttribute("id", "loginAccountInformationFormSubmit_button")
                loginAccountInformationFormSubmit_button.setAttribute("class", "entryButton")
                loginAccountInformationFormSubmit_button.innerText = "Submit";
                loginAccountInformationFormSubmit_div.appendChild(loginAccountInformationFormSubmit_button);
                
            // Append username input, password input, and submit button to login form
            loginAccountInformationForm_form.appendChild(loginAccountInformationUsername_div);
            loginAccountInformationForm_form.appendChild(loginAccountInformationPassword_div);
            loginAccountInformationForm_form.appendChild(loginAccountInformationFormSubmit_div);

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
