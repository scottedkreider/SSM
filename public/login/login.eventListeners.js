import {
    sendLoginInfoToServer, handleSendLoginInfoToServerResponse
} from "./login.apiCalls.js";

export function attachLoginEventListeners(loginDiv){
    // Add listener to submit button
    const loginAccountInformationFormSubmit_button = document.getElementById("loginAccountInformationFormSubmit_button");
    loginAccountInformationFormSubmit_button.addEventListener("click",async (event) => {
        event.preventDefault();
        const loginInfo = gatherLoginInfo();
        const response = await sendLoginInfoToServer(loginInfo);
        await handleSendLoginInfoToServerResponse(response, loginDiv);
    });
}


// Upon submit click, pull info from form
function gatherLoginInfo() {
    const loginInfo = {
        username: document.getElementById("loginAccountInformationUsername_input").value,
        password: document.getElementById("loginAccountInformationPassword_input").value
    }
    return loginInfo;
}