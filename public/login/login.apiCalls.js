import {
    displayUserNotFoundError, displayInvalidPasswordError
} from "./login.Interface.js";

// Send form info to the server
// Login Info:
//      const loginInfo = {
//          username: <text>,
//          password: <text>
//      }
export async function sendLoginInfoToServer(loginInfo){
    let res;
    await fetch('/api/auth/signin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
    })
        .then((response) => {
            res = response;
        }
        )
    return res;
}


// Listen for response and advance accordingly
//      If invalid password - (401 response) display error and refresh after 3seconds
//      If user not found - (404 response) display error and refresh after 3seconds
//      If successful - (200 response) save auth info to LocalStorage and advance to dashboard
export async function handleSendLoginInfoToServerResponse(response, divToUpdate){
    if(response.status === 401){
        // console.log("401 error");
        displayInvalidPasswordError(divToUpdate);
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
    else if(response.status === 404){
        // console.log("404 error");
        displayUserNotFoundError(divToUpdate);
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
    else if(response.status === 200){
        // console.log("successful login");
        localStorage.setItem("auth",JSON.stringify(await response.json()));
        const loginAccountInformationForm_form = document.getElementById("loginAccountInformationForm_form");
        loginAccountInformationForm_form.submit();
    }
}