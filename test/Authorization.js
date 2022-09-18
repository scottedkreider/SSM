QUnit.module('(Auth) Successfully create new account');

// QUnit.test('(1) Submit unique username and password', assert => {
//     const credentials = {
//         username: "user",
//         email: "user@scotttest.com",
//         password: "TheSecondBestPassword",
//         roles: ["user"]
//     }
//     const register_req = new XMLHttpRequest();

//     register_req.open("POST","/api/auth/signup",true)
//     register_req.send(JSON.stringify(credentials));

//     assert.equal(register_req.response.status,200);
// })

QUnit.test('(2) Access public content', assert => {
    var register_req = fetch("/api/test/all", {
        method: "GET"
    }).status
    assert.equal(register_req,200);
})