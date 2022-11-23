// Tests:
// 	- (failure: duplicate username) Submit an already existing username
// 		○ (pre) Account with the username already exists
// 		○ Submit a duplicate username
// 		○ Check that the response = 401
//
// 	- (failure: duplicate email) Submit an already existing email
// 		○ (pre) Account with the email already exists
// 		○ Submit a duplicate email
// 		○ Check that the response = 402
//
// 	- (success) Submit a unique username and password
// 		○ (pre) Username or email does not exist
// 		○ Check that the response = 200


// import fetch from "node-fetch";
const fetch = require("node-fetch");

const tools = require("../../tools/mongodb.Controller.js");


QUnit.module('(AUTH_API) Sign-up', {
    before: function() {
        console.log("before")
    }
});

// 	- (failure: duplicate username) Submit an already existing username
// 		○ (pre) Account with the username already exists
// 		○ Submit a duplicate username
// 		○ Check that the response = 401
QUnit.test('(1) Fail to create an account due to duplicate username', assert => {
    const done = assert.async();

    fetch('http://localhost:5000/api/auth/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "scott",
            "email": "scott@scott12345.com",
            "password": "scott"
        })
    })
    .then((response) => {
        assert.equal(response.status, 401);
        done();
        }
    );
})


// 	- (failure: duplicate email) Submit an already existing email
// 		○ (pre) Account with the email already exists
// 		○ Submit a duplicate email
// 		○ Check that the response = 402
QUnit.test('(2) Fail to create an account due to duplicate email', assert => {
    const done = assert.async();

    fetch('http://localhost:5000/api/auth/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "scott12345",
            "email": "scott@scott.com",
            "password": "scott"
        })
    })
    .then((response) => {
        assert.equal(response.status, 402);
        done();
        }
    );
})

 
// 	- (success) Submit a unique username and password
// 		○ (pre) Username or email does not exist
// 		○ Check that the response = 200
QUnit.test('(3) Successfully register an account with a unique username and email', assert => {
    const done = assert.async();

    var crypto = require("crypto");
    var id = crypto.randomBytes(20).toString('hex');

    fetch('http://localhost:5000/api/auth/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": `${id}`,
            "email": `${id}@scotttest.com`,
            "password": "TheSecondBestPassword"
        })
    })
    .then((response) => {
        assert.equal(response.status, 200);
        done();
        }
    );

    tools.deleteUser(`${id}`);
})
