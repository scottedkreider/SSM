import
    {   displayCreateAccountDiv,
        displayDuplicateUsernameError,
        displayDuplicateEmailError    }
    from "./createAccount.Interface.js";

// Get the Create Account placeholder div
const createAccount_div = document.getElementById("createAccountDiv");
displayCreateAccountDiv(createAccount_div);

// Add listener to submit button
const createAccountFormSubmit_button = document.getElementById("createAccountFormSubmit_button");
createAccountFormSubmit_button.addEventListener("click",async () => {
    const accountInfo = gatherAccountInfo()
    const responseStatus = await sendAccountInfoToServer(accountInfo);
    await handleSendAccountInfoToServerResponse(responseStatus.status);
});


// Upon submit click, pull info from form
function gatherAccountInfo() {
    const accountInfo = {
        username: document.getElementById("createAccountFormUsername_value").value,
        email: document.getElementById("createAccountFormEmail_value").value,
        password: document.getElementById("createAccountFormPassword_value").value
    }
    return accountInfo;
}

// Send form info to the server
async function sendAccountInfoToServer(accountInfo){
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
async function handleSendAccountInfoToServerResponse(status){
    if(status === 401){
        console.log("401 error");
        displayDuplicateUsernameError(createAccount_div);
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
    else if(status === 402){
        console.log("402 error");
        displayDuplicateEmailError(createAccount_div);
        setTimeout(() => {
            location.reload();
        }, 3000)
    }
    else if(status === 200){
        console.log("success");
        fetch('/');
    }
}