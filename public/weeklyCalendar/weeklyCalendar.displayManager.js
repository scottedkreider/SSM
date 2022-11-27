const DAYS_OF_THE_WEEK = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

const HOURS_OF_THE_DAY = {
    0: "12am",
    1: "1am",
    2: "2am",
    3: "3am",
    4: "4am",
    5: "5am",
    6: "6am",
    7: "7am",
    8: "8am",
    9: "9am",
    10: "10am",
    11: "11am",
    12: "12pm",
    13: "1pm",
    14: "2pm",
    15: "3pm",
    16: "4pm",
    17: "5pm",
    18: "6pm",
    19: "7pm",
    20: "8pm",
    21: "9pm",
    22: "10pm",
    23: "11pm",
}


const SHADOW_DIRECTION = "inShadow";
// const SHADOW_DIRECTION = "outShadow";

function initiateWeeklyCalendar(){
    if(!localStorage.getItem("weeklyCalendar")){
        const week = {
            days: []
        }
    
        const dayKeys = Object.keys(DAYS_OF_THE_WEEK);
        dayKeys.forEach((day) => {
            const dayObject = {
                dayName: DAYS_OF_THE_WEEK[day],
                dayId: day,
                hourCheckList: new Array(24).fill(false)
            }
    
            dayObject.hourCheckList[5] = true;
            
            week.days.push(dayObject);
        })
    
        localStorage.setItem("weeklyCalendar",JSON.stringify(week));
    }
}


function calendarDisplay(){
    initiateWeeklyCalendar()
    
    const calendarDisplayDiv = document.createElement("div");
    calendarDisplayDiv.id = "calendarDisplay";
    calendarDisplayDiv.classList += "calContainer";

    const div = document.createElement("div");
    div.id = "calendarHourDisplay";
    div.appendChild(calendarHourDisplayHeaderDiv());
    for(let i = 0; i < 24; i++){
        const newDiv = document.createElement("div");
        newDiv.classList += `calendarHourRowTitle tableHeaderShadow`;
        newDiv.innerText += `${HOURS_OF_THE_DAY[i]}`;
        div.appendChild(newDiv);
    }
    calendarDisplayDiv.appendChild(div);

    for(let i = 0; i < 7; i++){
        const div = document.createElement("div");
        div.id = `calendarColumn_${i}`
        div.classList += `calendarColumn`;
    
        div.appendChild(calendarColumnDayHeaderDiv(i));
        div.appendChild(calendarColumnDayDisplayDiv(i));
    
        calendarDisplayDiv.appendChild(div);
    }
    return calendarDisplayDiv;
}

function calendarHourDisplayHeaderDiv() {
    const calendarHourDisplayHeaderDiv = document.createElement("div");
    calendarHourDisplayHeaderDiv.classList += `calendarHourDisplayHeader tableHeaderShadow`;    

    return calendarHourDisplayHeaderDiv;
}

function calendarColumnDayHeaderDiv(dayIndicator) {
    const calendarColumnDayHeaderDiv = document.createElement("div");
    calendarColumnDayHeaderDiv.classList += `calendarColumnHeader headerShadow`;

    const calendarColumnDayH1 = document.createElement("p");
    calendarColumnDayH1.innerText = `${DAYS_OF_THE_WEEK[dayIndicator]}`;
    
    calendarColumnDayHeaderDiv.appendChild(calendarColumnDayH1);

    return calendarColumnDayHeaderDiv;
}


function calendarColumnDayDisplayDiv(dayIndicator) {
    const calendarColumnDayDisplayDiv = document.createElement("div");
    calendarColumnDayDisplayDiv.classList += `calendarColumnDayDisplay tableHeaderShadow`;

    for (let j = 0; j < 24; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList += `calendarColumnHourTitle ${SHADOW_DIRECTION} day_${dayIndicator} hour_${j}`;
        newDiv.id = `block_${dayIndicator}_${j}`;
        calendarColumnDayDisplayDiv.appendChild(newDiv);
    }

    return calendarColumnDayDisplayDiv;
}

/////////////////////////////////////////////////////////////////////////
function drawScreen(){
    const weeklyCalendarDiv = document.getElementById("weeklyCalendarDiv");
    weeklyCalendarDiv.replaceChildren();
    
    const calendarBodyDiv = document.createElement("div");
    calendarBodyDiv.id = "calendarBodyDiv";
    
    calendarBodyDiv.appendChild(calendarDisplay());
    
    weeklyCalendarDiv.appendChild(calendarBodyDiv);
}


/////////////////////////////////////////////////////////////////////////
function attachEventListeners() {
    const dailyHourBlocks = document.querySelectorAll(".calendarColumnHourTitle");
    dailyHourBlocks.forEach((block) => {
        block.addEventListener("click",() => blockClickListener(block));
        block.addEventListener("mouseover", () => blockMouseoverListener(block))
    })
}

function blockClickListener(block) {
    const weeklyCalendar = JSON.parse(localStorage.getItem("weeklyCalendar"));

    const dayClicked = block.id.split("_")[1];
    const hourClicked = block.id.split("_")[2];

    if(block.classList.contains("inShadow")){
        block.classList.replace("inShadow","outShadow");
        // const bubblePop = new Audio('/audio/bubble-sound-43207_shortened.mp3').play()
    } else {
        block.classList.replace("outShadow","inShadow");
        // const bubblePop = new Audio('/audio/bubble-sound-43207_backward.mp3').play()
    }

    weeklyCalendar.days[dayClicked].hourCheckList[hourClicked] = !weeklyCalendar.days[dayClicked].hourCheckList[hourClicked];
    localStorage.setItem("weeklyCalendar",JSON.stringify(weeklyCalendar));
}

function blockMouseoverListener(block){
    const dayMousedOver = block.id.split("_")[1];
    const hourMousedOver = block.id.split("_")[2];

}


/////////////////////////////////////////////////////////////////////////
function applyVisualUpdates(){
    const weekObject = JSON.parse(localStorage.getItem("weeklyCalendar"));
    console.log(weekObject);
    weekObject.days.forEach((day) => {
        applyBlockCheckUpdates(day);
    })
}

function applyBlockCheckUpdates(day){
    day.hourCheckList.forEach((isHourChecked, j) => {
        const dayHourBlock = document.getElementById(`block_${day.dayId}_${j}`);
        if(isHourChecked){
            dayHourBlock.classList.replace("inShadow","outShadow");
        }
    })
}


/////////////////////////////////////////////////////////////////////////
function refreshBrowserWindow(){
    drawScreen()
    applyVisualUpdates()
    attachEventListeners()
}

refreshBrowserWindow()
