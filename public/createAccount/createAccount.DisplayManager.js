import
    {   displayCreateAccountDiv }
    from "./createAccount.Interface.js";

import
    {   addEventListeners    }
    from "./createAccount.eventListeners.js";

// Get the Create Account placeholder div
const createAccount_div = document.getElementById("createAccountDiv");

displayCreateAccountDiv(createAccount_div);
addEventListeners(createAccount_div);

