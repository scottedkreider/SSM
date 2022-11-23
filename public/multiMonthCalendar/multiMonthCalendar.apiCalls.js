"use strict";

export async function deleteMMCFromDatabase(){
    await fetch('/api/multiMonthCalendar', {
        method: "DELETE",
        headers: {
            'Authorization': `${JSON.parse(localStorage.getItem("auth")).username}`,
            'x-access-token': `${JSON.parse(localStorage.getItem("auth")).accessToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(async (response) => {
            console.log(response);
        }
        )
}

export async function sendMMCToDatabase(){
    await fetch('/api/multiMonthCalendar', {
        method: "POST",
        headers: {
            'Authorization': `${JSON.parse(localStorage.getItem("auth")).username}`,
            'x-access-token': `${JSON.parse(localStorage.getItem("auth")).accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _mgr: localStorage.getItem("_multiMonthCalendar")
        })
    })
        .then(async (response) => {
            console.log(response);
        }
        )
}

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