import {
    sendAccountInfoToServer, handleSendAccountInfoToServerResponse
    } from "./createAccount.apiCalls.js";

function createAccountFormSubmitListener(divToUpdate){
    // Add listener to submit button
    const createAccountFormSubmit_button = document.getElementById("createAccountFormSubmit_button");
    createAccountFormSubmit_button.addEventListener("click",async (event) => {
        event.preventDefault();
        const accountInfo = gatherAccountInfo();
        const responseStatus = await sendAccountInfoToServer(accountInfo);
        await handleSendAccountInfoToServerResponse(responseStatus.status, divToUpdate);
    });
}

// Upon submit click, pull info from form
function gatherAccountInfo() {
    const accountInfo = {
        username: document.getElementById("createAccountFormUsername_value").value,
        email: document.getElementById("createAccountFormEmail_value").value,
        password: document.getElementById("createAccountFormPassword_value").value
    }
    return accountInfo;
}

export function addEventListeners(divToUpdate){
    createAccountFormSubmitListener(divToUpdate);
}


