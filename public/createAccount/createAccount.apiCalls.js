import {
    displayDuplicateUsernameError, displayDuplicateEmailError
    } from "./createAccount.Interface.js";

// Send form info to the server
export async function sendAccountInfoToServer(accountInfo){
    let res;
    await fetch('/api/auth/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(accountInfo)
    })
        .then((response) => {
            res = response;
        }
        )
    return res;
}


// Listen for response
export async function handleSendAccountInfoToServerResponse(status, divToUpdate){
    if(status === 401){
        // console.log("401 error");
        displayDuplicateUsernameError(divToUpdate);
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
    else if(status === 402){
        // console.log("402 error");
        displayDuplicateEmailError(divToUpdate);
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
    else if(status === 200){
        // console.log("successful login");
        const createAccountForm_form = document.getElementById("createAccountForm_form");
        createAccountForm_form.submit();
    }
}