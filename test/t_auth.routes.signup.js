// import fetch from "node-fetch";
const fetch = require("node-fetch");

const tools = require("../tools/mongodb.Controller");


QUnit.module('(AUTH API) Sign-up', {
    before: function() {
        console.log("before")
    }
});


QUnit.test('(1) Fail to create an account due to duplicate username', assert => {
    const done = assert.async();

    fetch('http://localhost:5000/api/auth/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "myInitialUserThatNoOneElseWillPick",
            "email": "usera@scotttest.com",
            "password": "TheSecondBestPassword"
        })
    })
    .then((response) => {
        assert.equal(response.status, 401);
        done();
        }
    );
})


QUnit.test('(2) Fail to create an account due to duplicate email', assert => {
    const done = assert.async();

    fetch('http://localhost:5000/api/auth/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "user2",
            "email": "myInitialUserThatNoOneElseWillPick@scotttest.com",
            "password": "TheSecondBestPassword"
        })
    })
    .then((response) => {
        assert.equal(response.status, 402);
        done();
        }
    );
})


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



// QUnit.module('(AUTH API) Sign-in');