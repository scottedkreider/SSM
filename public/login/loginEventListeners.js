function loginEventListeners() {
    const loginSubmitButton = document.getElementById("loginSubmitButton")

    loginSubmitButton.addEventListener("click",() => {
        console.log("submitted")

        const loginUsername = document.getElementById("loginUsername")
        const loginPassword = document.getElementById("loginPassword")

        console.log(loginUsername);
        console.log(loginPassword);

        loginDataProcessing();
    })
}