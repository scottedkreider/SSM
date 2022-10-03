const indexDiv = document.getElementById("createAccountDiv");

indexDiv.innerHTML = "<h1>Create Account</h1>";
indexDiv.innerHTML += `
<form id = "testForm" method = "POST">
    <input type = "text" placeholder = "name" name = "username">
    <input type = "email" placeholder = "email" name = "email">
    <input type = "password" placeholder = "password" name = "password">
    <button type = "submit">Submit</button>
</form>
`;

