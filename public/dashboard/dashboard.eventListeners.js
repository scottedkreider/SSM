import {
    getMMCFromDatabase, getWTLFromDatabase
    } from "./dashboard.apiCalls.js";

// Event listener that loads MMC from database upon loading the dashboard page
async function loadMMCOnPageLoad(){
    window.addEventListener("load",async () => {
        getMMCFromDatabase()
            .then((res) => {
                if(res.statusCode === 200){
                    localStorage.setItem("_multiMonthCalendar",JSON.stringify(res.payload.mmc));
                } else if (res.statusCode === 401) {
                    localStorage.removeItem("_multiMonthCalendar");
                } else {
                    // console.log("load MMC error")
                }
            })
    });
}

// Event listener that loads WTL from database upon loading the dashboard page
async function connectLoadTaskListFromDBListener(){
    window.addEventListener("load",async () => {
        getWTLFromDatabase()
        .then((res) => {
            if(res.statusCode === 200){
                localStorage.setItem("_weeklyTaskList",JSON.stringify(res.payload.wtl));
            } else if (res.statusCode === 401) {
                localStorage.removeItem("_weeklyTaskList");
            } else {
                // console.log("load WTL error")
            }
        })
    });
}

// Combining the event listeners into one exposed EventListeners function
export function attachEventListeners(){
    loadMMCOnPageLoad();
    connectLoadTaskListFromDBListener();
}
