const fetch = require("node-fetch");

// import fetch from "node-fetch";

QUnit.module('(Auth) Successfully create new account');

QUnit.test('(1) Access public content', assert => {
    const done = assert.async();

    fetch('http://localhost:5000/api/test/all')
    .then((response) => {
        assert.equal(response.status, 200);
        done();
        }
    );
})


QUnit.test('(2) Attempt to register a username that is already created', assert => {
    const done = assert.async();

    const data = {
        "username": "user1",
        "email": "userabcd@scotttest.com",
        "password": "TheSecondBestPassword"
    }

    fetch('http://localhost:5000/api/auth/signup',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        assert.equal(response.status, 401);
        done();
        }
    );
})




QUnit.test('(2) Attempt to register an email that is already created', assert => {
    const done = assert.async();

    const data = {
        "username": "user2",
        "email": "user1@scotttest.com",
        "password": "TheSecondBestPassword"
    }

    fetch('http://localhost:5000/api/auth/signup',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        assert.equal(response.status, 402);
        done();
        }
    );
})