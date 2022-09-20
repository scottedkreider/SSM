"use strict";

const indexDiv = document.getElementById("indexDiv");

indexDiv.innerHTML = "<h1>SSM Dashboard</h1>";
indexDiv.innerHTML += `
<form action = "/test" id = "testForm" method = "POST">
    <input type = "text" placeholder = "name" name = "name">
    <input type = "text" placeholder = "quote" name = "quote">
    <button type = "submit">Submit</button>
</form>
`;

