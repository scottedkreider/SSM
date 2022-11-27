import {
    displayLoginAccountInformationDiv
} from "./login.Interface.js";

import {
    attachLoginEventListeners
} from "./login.eventListeners.js";

// Grab the div to hold the login page
const login_div = document.getElementById("loginDiv");

displayLoginAccountInformationDiv(login_div);
attachLoginEventListeners(login_div);
