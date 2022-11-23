// Tests:
// 	- (failure) Fail to send to database due to no authorization token
// 		○ Check that response = 403
//
// 	- (failure) Fail to send to database due to incorrect authorization token
// 		○ (pre) A username already exists
// 		○ Check that response = 401
//
// 	- (failure) Fail to send to database due to incorrect MMC format
// 		○ (pre) A username already exists
// 		○ Check that response = 500
//
// 	- (success) Successfully send to database
// 		○ (pre) A username already exists
// 		○ Check that response = 200


const fetch = require("node-fetch");

const tools = require("../../tools/mongodb.Controller");


QUnit.module('(MMC_API) MMC Data Access - Send to Database', {
    before: function() {
        console.log("before")
    }
});

// 	- (failure) Fail to send to database due to no authorization token
// 		○ Check that response = 403
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


// 	- (failure) Fail to send to database due to incorrect authorization token
// 		○ (pre) A username already exists
// 		○ Check that response = 401
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


// 	- (failure) Fail to send to database due to incorrect MMC format
// 		○ (pre) A username already exists
// 		○ Check that response = 500
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


// 	- (success) Successfully send to database
// 		○ (pre) A username already exists
// 		○ Check that response = 200
// QUnit.test('(4) Fail to send to database due to incorrect MMC format', async(assert) => {
//     var done = assert.async();
//     let signinResponse = {};

//     await fetch('http://localhost:5000/api/auth/signin', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "username": "scott",
//             "password": "scott"
//         })
//     })
//     .then(async (response) => {
//         signinResponse = await response.json();
//         }
//     );

//     const _mgr = {}

//     // Send successfully to the database
//     await fetch('http://localhost:5000/api/multiMonthCalendar', {
//         method: "POST",
//         headers: {
//             'Authorization': `scott`,
//             'x-access-token': `${signinResponse.accessToken}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             _mgr: _mgr
//         })
//     })
//         .then(async (response) => {
//             assert.equal(response.status, 500);
//             done();
//         }
//         )
// })