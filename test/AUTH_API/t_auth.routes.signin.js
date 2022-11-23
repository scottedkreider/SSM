// Tests:
// 	- (failure: username not found) Submit a username and email that don’t have an account
// 		○ (pre) Account with the username does not exist
// 		○ Check that the response = 404
//
// 	- (failure: password does not match) Submit a password that does not match with the username
// 		○ (pre) Account with the username exists
// 		○ Check that the response = 401
//
// 	- (success) Signin successfully with a username and password
// 		○ (pre) Account with the username exists
// 		○ Check that response = 200


// import fetch from "node-fetch";
const fetch = require("node-fetch");

const tools = require("../../tools/mongodb.Controller.js");


QUnit.module('(AUTH_API) Sign-in', {
    before: function() {
        console.log("before")
    }
});



// 	- (failure) Fail to signin due to incorrect password
// 		○ Check that response = 404
QUnit.test('(1) Fail to signin due to username not found', assert => {
    const done = assert.async();

    fetch('http://localhost:5000/api/auth/signin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "abcd1234",
            "password": "scott"
        })
    })
    .then((response) => {
        assert.equal(response.status, 404);
        done();
        }
    );
})


// 	- (failure) Fail to signin due to incorrect password
// 		○ (pre) A username already exists
// 		○ Check that response = 401
QUnit.test('(2) Fail to signin due to incorrect password', assert => {
    const done = assert.async();

    fetch('http://localhost:5000/api/auth/signin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "scott",
            "password": "abcd1234"
        })
    })
    .then((response) => {
        assert.equal(response.status, 401);
        done();
        }
    );
})


// 	- (success) Signin successfully with a username and password
// 		○ (pre) A username already exists
// 		○ Check that response = 200
QUnit.test('(3) Signin successfully with a username and a password', assert => {
    const done = assert.async();

    fetch('http://localhost:5000/api/auth/signin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "scott",
            "password": "scott"
        })
    })
    .then((response) => {
        assert.equal(response.status, 200);
        done();
        }
    );
})