// Tests:
// 	- (success) Signin successfully with a username and password
// 		○ (pre) A username already exists
// 		○ Check that response = 200
// 		○ Check that JSON matches
// 	- (failure: username not found) Submit a username and email that don’t have an account
// 		○ (pre) Account with the username does not exist
// 		○ Submit an account that doesn't exist
// 		○ Check that the response = 404
// 	- (failure: password does not match) Submit a password that does not match with the username
// 		○ (pre) Account with the username exists
// 		○ Submit a password that does not match
// 		○ Check that the response = 401


// import fetch from "node-fetch";
const fetch = require("node-fetch");

// mongoDb dev tools (add, delete, etc...)
const tools = require("../tools/mongodb.Controller");


QUnit.module('(AUTH API) Sign-in', {
    before: function() {
        console.log("before")
    }
});



// 	- (success) Signin successfully with a username and password
// 		○ (pre) A username already exists
// 		○ Check that response = 200
// 		○ Check that JSON matches
QUnit.test('(1) Signin successfully with a username and a password', assert => {
    const done = assert.async();

    tools.addUser({
        username: "__aTestUser",
        email: "__aTestUser@testUser.com",
        password: "abcd1234"
    });

    fetch('http://localhost:5000/api/auth/signin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "__aTestUser",
            "password": "abcd1234"
        })
    })
    .then((response) => {
        assert.equal(response.status, 200);
        done();
        }
    );
})
