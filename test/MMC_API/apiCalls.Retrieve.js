// Tests:
// 	- (failure) Fail to retrieve from database due to no authorization token
// 		○ Check that response = 403
//
// 	- (failure) Fail to retrieve from database due to incorrect authorization token
// 		○ (pre) A username already exists
// 		○ Check that response = 401
//
// 	- (success) Successfully retrieve MMC from the database
// 		○ (pre) A username already exists
// 		○ (pre) A MMC already exists for the username
// 		○ Check that response = 200


const fetch = require("node-fetch");

QUnit.module('(MMC_API) MMC Data Access - Retrieve from Database', {
    before: function() {
        console.log("before")
    }
});


// 	- (failure) Fail to retrieve from database due to no authorization token
// 		○ Check that response = 403
QUnit.test('(1) Fail to retrieve from database due to no authorization token', async(assert) => {
    const done = assert.async();

    await fetch('http://localhost:5000/api/multiMonthCalendar', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(async (response) => {
            assert.equal(response.status, 403);
            done();
        }
        )
})


// 	- (failure) Fail to retrieve from database due to incorrect authorization token
// 		○ (pre) A username already exists
// 		○ Check that response = 401
QUnit.test('(2) Fail to retrieve from database due to incorrect authorization token', async (assert) => {
    const done = assert.async();

    const _mgr = {
        name: "a"
    };

    await fetch('http://localhost:5000/api/multiMonthCalendar', {
        method: "GET",
        headers: {
            'Authorization': "scott",
            'x-access-token': "1234",
            'Content-Type': 'application/json'
        }
    })
        .then(async (response) => {
            assert.equal(response.status, 401);
            done();
        }
        )
})


// 	- (success) Successfully retrieve MMC from the database
// 		○ (pre) A username already exists
// 		○ (pre) A MMC already exists for the username
// 		○ Check that response = 200
QUnit.test('(3) Successfully retrieve from database', async (assert) => {
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

    // Send successfully to the database
    await fetch('http://localhost:5000/api/multiMonthCalendar', {
        method: "GET",
        headers: {
            'Authorization': `scott`,
            'x-access-token': `${signinResponse.accessToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(async (response) => {
            assert.equal(response.status, 200);
            done();
        }
        )
})