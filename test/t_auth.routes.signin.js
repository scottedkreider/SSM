// import fetch from "node-fetch";
const fetch = require("node-fetch");

const tools = require("../tools/mongodb.Controller");


// QUnit.module('(AUTH API) Sign-in', {
//     before: function() {
//         console.log("before")
//     }
// });


// QUnit.test('(1) Fail to create an account due to duplicate username', assert => {
//     const done = assert.async();

//     fetch('http://localhost:5000/api/auth/signup', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "username": "myInitialUserThatNoOneElseWillPick",
//             "email": "usera@scotttest.com",
//             "password": "TheSecondBestPassword"
//         })
//     })
//     .then((response) => {
//         assert.equal(response.status, 401);
//         done();
//         }
//     );
// })
