// Initial load of the WTL from the database
// If none, nothing is loaded
export async function getWTLFromDatabase(){
    var res;
    await fetch('/api/weeklyTaskList', {
        method: "GET",
        headers: {
            'Authorization': `${JSON.parse(localStorage.getItem("auth")).username}`,
            'x-access-token': `${JSON.parse(localStorage.getItem("auth")).accessToken}`
        }
    })
        .then(async (response) => {
            res = {
                statusCode: response.status,
                payload: await response.json()
            }
        }
        )
    return res;
}

// Initial load of the MMC from the database
// If none, nothing is loaded
export async function getMMCFromDatabase(){
    var res;
    await fetch('/api/multiMonthCalendar', {
        method: "GET",
        headers: {
            'Authorization': `${JSON.parse(localStorage.getItem("auth")).username}`,
            'x-access-token': `${JSON.parse(localStorage.getItem("auth")).accessToken}`
        }
    })
        .then(async (response) => {
            res = {
                statusCode: response.status,
                payload: await response.json()
            }
        }
        )
    return res;
}