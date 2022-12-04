// Send the _weeklyTaskList from LocalStorage to the database
//      Uses authorization info from LocalStorage
export async function sendWTLToDatabase() {
    await fetch('/api/weeklyTaskList', {
        method: "POST",
        headers: {
            'Authorization': `${JSON.parse(localStorage.getItem("auth")).username}`,
            'x-access-token': `${JSON.parse(localStorage.getItem("auth")).accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _wtl: localStorage.getItem("_weeklyTaskList")
        })
    })
        .then(async (response) => {
            // console.log(response);
        }
        )
}