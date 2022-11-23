"use strict";

import {getMMCFromDatabase} from "../multiMonthCalendar/multiMonthCalendar.apiCalls.js";

const dashboardDiv = document.getElementById("dashboardDiv");

dashboardDiv.innerHTML = "dashboard";

loadMMCOnPageLoad()
connectLoadTaskListFromDBListener();



async function loadMMCOnPageLoad(){
    window.addEventListener("load",async () => {
        getMMCFromDatabase()
            .then((res) => {
                if(res.statusCode === 200){
                    localStorage.setItem("_multiMonthCalendar",JSON.stringify(res.payload.mmc));
                } else if (res.statusCode === 401) {
                    localStorage.removeItem("_multiMonthCalendar");
                } else {
                    console.log("load MMC error")
                }
            })
    });
}




async function connectLoadTaskListFromDBListener(){
    window.addEventListener("load",async () => {
        // On click
        //      Add new row with places to fill in the new info for the task category at the bottom of the category list (but before MISC)
        getWTLFromDatabase()
        .then((res) => {
            if(res.statusCode === 200){
                localStorage.setItem("_weeklyTaskList",JSON.stringify(res.payload.wtl));
            } else if (res.statusCode === 401) {
                localStorage.removeItem("_weeklyTaskList");
            } else {
                console.log("load WTL error")
            }
        })
    });
}

async function getWTLFromDatabase(){
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