export function loginAccountInformationUsername_div(){
    const loginAccountInformationUsername_div = document.createElement("div");
    const loginAccountInformationUsername_input = document.createElement("input");
    loginAccountInformationUsername_input.setAttribute("type", "text");
    loginAccountInformationUsername_input.setAttribute("id", "loginAccountInformationUsername_input");
    loginAccountInformationUsername_input.setAttribute("class", "entryField")
    loginAccountInformationUsername_input.setAttribute("placeholder", "Username");
    loginAccountInformationUsername_input.setAttribute("minlength", "5");
    loginAccountInformationUsername_div.append(loginAccountInformationUsername_input);

    return loginAccountInformationUsername_div;
}


export function loginAccountInformationPassword_div(){
    const loginAccountInformationPassword_div = document.createElement("div");
    const loginAccountInformationPassword_input = document.createElement("input");
    loginAccountInformationPassword_input.setAttribute("type", "password");
    loginAccountInformationPassword_input.setAttribute("id", "loginAccountInformationPassword_input");
    loginAccountInformationPassword_input.setAttribute("class", "entryField")
    loginAccountInformationPassword_input.setAttribute("placeholder", "Password");
    loginAccountInformationPassword_input.required = true;
    loginAccountInformationPassword_div.append(loginAccountInformationPassword_input);
    
    return loginAccountInformationPassword_div;
}

export function loginAccountInformationFormSubmit_div(){
    const loginAccountInformationFormSubmit_div = document.createElement("div");
    loginAccountInformationFormSubmit_div.setAttribute("class", "row justify-content-center")
    const loginAccountInformationFormSubmit_button = document.createElement("button");
    loginAccountInformationFormSubmit_button.setAttribute("type", "submit")
    loginAccountInformationFormSubmit_button.setAttribute("id", "loginAccountInformationFormSubmit_button")
    loginAccountInformationFormSubmit_button.setAttribute("class", "entryButton")
    loginAccountInformationFormSubmit_button.innerText = "Submit";
    loginAccountInformationFormSubmit_div.appendChild(loginAccountInformationFormSubmit_button);

    return(loginAccountInformationFormSubmit_div);
}