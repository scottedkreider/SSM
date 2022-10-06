export function displayCreateAccountDiv(parentDiv) {
    // Create the display for the form to enter username, email, and password
    const createAccountForm_div = document.createElement("div");

        // Account information form
        const createAccountForm_form = document.createElement("form");
        createAccountForm_form.setAttribute("id","createAccountForm_form");
        createAccountForm_form.setAttribute("method","GET");
        createAccountForm_form.setAttribute("action","/");

            // Username input
            const createAccountFormUsername_div = document.createElement("div");
            const createAccountFormUsername_input = document.createElement("input");
            createAccountFormUsername_input.setAttribute("id","createAccountFormUsername_value");
            createAccountFormUsername_input.setAttribute("type","text");
            createAccountFormUsername_input.setAttribute("class","entryField");
            createAccountFormUsername_input.setAttribute("placeholder","Username");
            createAccountFormUsername_input.setAttribute("minlength","5");
            createAccountFormUsername_input.required = true;
            createAccountFormUsername_div.appendChild(createAccountFormUsername_input);

            // Email input
            const createAccountFormEmail_div = document.createElement("div");
            const createAccountFormEmail_input = document.createElement("input");
            createAccountFormEmail_input.setAttribute("id","createAccountFormEmail_value");
            createAccountFormEmail_input.setAttribute("type","email");
            createAccountFormEmail_input.setAttribute("class","entryField");
            createAccountFormEmail_input.setAttribute("placeholder","Email");
            createAccountFormEmail_input.required = true;
            createAccountFormEmail_div.appendChild(createAccountFormEmail_input);

            // Password input
            const createAccountFormPassword_div = document.createElement("div");
            const createAccountFormPassword_input = document.createElement("input");
            createAccountFormPassword_input.setAttribute("type","password");
            createAccountFormPassword_input.setAttribute("id","createAccountFormPassword_value");
            createAccountFormPassword_input.setAttribute("class","entryField");
            createAccountFormPassword_input.setAttribute("placeholder","Password");
            createAccountFormPassword_input.required = true;
            createAccountFormPassword_div.appendChild(createAccountFormPassword_input);

            // Submit button
            const createAccountFormSubmit_div = document.createElement("div");
            const createAccountFormSubmit_button = document.createElement("button");
            createAccountFormSubmit_button.setAttribute("type","submit")
            createAccountFormSubmit_button.setAttribute("id","createAccountFormSubmit_button")
            createAccountFormSubmit_button.setAttribute("class","entryButton");
            createAccountFormSubmit_button.innerText = "Submit";
            createAccountFormSubmit_div.appendChild(createAccountFormSubmit_button);

        // Append the 3 inputs and the 1 button to the form div
        createAccountForm_form.append(createAccountFormUsername_div);
        createAccountForm_form.append(createAccountFormEmail_div);
        createAccountForm_form.append(createAccountFormPassword_div);
        createAccountForm_form.append(createAccountFormSubmit_div);

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
