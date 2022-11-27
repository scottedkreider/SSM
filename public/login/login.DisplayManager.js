import {
    displayLoginAccountInformationDiv
} from "./login.Interface.js";

import {
    attachLoginEventListeners
} from "./login.eventListeners.js";

// Grab the div to hold the login page
const login_div = document.getElementById("loginDiv");

// Display the login Interface
displayLoginAccountInformationDiv(login_div);

// Attach the login Event Listeners
attachLoginEventListeners(login_div);
