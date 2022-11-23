// Tests:
// 	- (success) Submit a unique username and password
// 		○ (pre) Username or email does not exist
// 		○ Check that the response = 200
// 	- (failure: duplicate username) Submit an already existing username
// 		○ (pre) Account with the username already exists
// 		○ Submit a duplicate username
// 		○ Check that the response = 401
// 	- (failure: duplicate email) Submit an already existing email
// 		○ (pre) Account with the email already exists
// 		○ Submit a duplicate email
// 		○ Check that the response = 402


// import fetch from "node-fetch";
const fetch = require("node-fetch");

const tools = require("../tools/mongodb.Controller");


QUnit.module('(MMC API) MMC Data Access - Send to Database', {
    before: function() {
        console.log("before")
    }
});


QUnit.test('(1) Fail to send to database due to no authorization token', async(assert) => {
    const done = assert.async();

    const _mgr = {
        name: "a"
    };

    await fetch('http://localhost:5000/api/multiMonthCalendar', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _mgr: JSON.stringify(_mgr)
        })
    })
        .then(async (response) => {
            assert.equal(response.status, 403);
            done();
        }
        )
})

QUnit.test('(2) Fail to send to database due to incorrect authorization token', async (assert) => {
    const done = assert.async();

    const _mgr = {
        name: "a"
    };

    await fetch('http://localhost:5000/api/multiMonthCalendar', {
        method: "POST",
        headers: {
            'Authorization': "scott",
            'x-access-token': "1234",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _mgr: JSON.stringify(_mgr)
        })
    })
        .then(async (response) => {
            assert.equal(response.status, 401);
            done();
        }
        )
})

QUnit.test('(3) Fail to send to database due to incorrect MMC format', async(assert) => {
    var done = assert.async();
    let signinResponse = {};

    await fetch('http://localhost:5000/api/auth/signin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "scott",
            "password": "scott"
        })
    })
    .then(async (response) => {
        signinResponse = await response.json();
        }
    );

    const _mgr = {}

    // console.log(signinResponse);
    // console.log(JSON.stringify(_mgr));

    // Send successfully to the database
    await fetch('http://localhost:5000/api/multiMonthCalendar', {
        method: "POST",
        headers: {
            'Authorization': `scott`,
            'x-access-token': `${signinResponse.accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _mgr: _mgr
        })
    })
        .then(async (response) => {
            assert.equal(response.status, 500);
            done();
        }
        )
})


// QUnit.module('(MMC API) MMC Data Access - Delete from Database', {
//     before: function() {
//         console.log("before")
//     }
// });


// QUnit.module('(MMC API) MMC Data Access - Retrieve from Database', {
//     before: function() {
//         console.log("before")
//     }
// });