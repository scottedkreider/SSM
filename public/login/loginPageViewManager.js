"use strict";

// Access the login page div-element
const loginPageDiv = document.getElementById("loginPageDiv");

// The starting point for the login page div-element
loginPageDiv.innerHTML = `<h1>Hello world!</h1>`;

loginPageDiv.appendChild(loginEntryField())
loginEventListeners();