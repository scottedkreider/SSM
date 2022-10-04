import
    {   displayLoginAccountInformationDiv,
        displayUserNotFoundError,
        displayInvalidPasswordError    }
    from "./login.Interface.js";

// Grab the div to hold the login page
const login_div = document.getElementById("loginDiv");

displayLoginAccountInformationDiv(login_div);


// Add listener to submit button
const loginAccountInformationFormSubmit_button = document.getElementById("loginAccountInformationFormSubmit_button");
loginAccountInformationFormSubmit_button.addEventListener("click",async (event) => {
    event.preventDefault();
    const loginInfo = gatherLoginInfo();
    const response = await sendLoginInfoToServer(loginInfo);
    await handleSendLoginInfoToServerResponse(response);
});


// Upon submit click, pull info from form
function gatherLoginInfo() {
    const loginInfo = {
        username: document.getElementById("loginAccountInformationUsername_input").value,
        password: document.getElementById("loginAccountInformationPassword_input").value
    }
    return loginInfo;
}

// Send form info to the server
async function sendLoginInfoToServer(loginInfo){
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


// Listen for response
async function handleSendLoginInfoToServerResponse(response){
    if(response.status === 401){
        console.log("401 error");
        displayUserNotFoundError(login_div);
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
    else if(response.status === 404){
        console.log("404 error");
        displayInvalidPasswordError(login_div);
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