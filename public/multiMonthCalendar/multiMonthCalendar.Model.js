"use strict";

export default class MultiMonthCalendarManager {
    constructor(startDate,endDate,title){
        this._mmc = new MultiMonthCalendar(startDate,endDate,title);
    }

    // Contract
    // The dateToCheck is a date in the format "yyyy/mm/dd"
    //      and prior to the current day
    checkDayAsComplete(dateToCheck){
        this._mmc.checkDayAsComplete(dateToCheck);
    }

    // Contract
    // The dateToAddInfo is a date in the format "yyyy/mm/dd"
    // Info is a string with <= 32chars
    addInfoToDay(dateToAddInfo, info){
        this._mmc.addInfoToDay(dateToAddInfo, info);
    }

    // Contract
    // The dateToAddInfo is a date in the format "yyyy/mm/dd"
    // The oldInfo is a string with <= 32chars
    //      - NECESSARILY the previous info that was there
    // newInfo is a string with <= 32chars
    updateInfoOnDay(dateToAddInfo, oldInfo, newInfo){
        this._mmc.updateInfoOnDay(dateToAddInfo, oldInfo, newInfo);
    }

    // Contract
    // The user has confirmed that they want to delete the calendar
    // NOTE: The user shall be prompted to start a new MMC once this is done
    deleteMultiMonthCalendar(){
        this._mmc = null;
    }

    checkAllAvailableDaysAsComplete(){
        this._mmc.checkAllAvailableDaysAsComplete();
    }
}

class MultiMonthCalendar {
    constructor(startDate,endDate,title){
        this.StartDate = startDate;
        this.EndDate = endDate;
        this.Title = title;
        this.ListOfDays = this.getListOfDaysBetweenDates(startDate,endDate);
    }

    // Contract
    // The startDate is <= endDate
    getListOfDaysBetweenDates(startDate, endDate){
        var days = [];
        
        var currentDay = new Date(startDate);
        var endDay = new Date(endDate);
    
        do{
            days.push(new Day(currentDay.getUTCDate(), currentDay.getUTCMonth()+1, currentDay.getUTCFullYear(), currentDay.getUTCDay() + 1));
            currentDay.setDate(currentDay.getDate() + 1);
        } while(currentDay <= endDay)
    
        return days;
    }

    // Contract
    // The dateToCheck is a date in the format "yyyy/mm/dd"
    //      and prior to the current day
    //      and within the defined multimonth period
    checkDayAsComplete(dateToCheck){
        var checkDate = new Date(dateToCheck);
        this.ListOfDays.find(day => day.DayOfTheMonth === checkDate.getUTCDate()
            && day.Month12 === checkDate.getUTCMonth()+1
            && day.FullYear === checkDate.getUTCFullYear()).Completed = true;
    }

    // Contract
    // The dateToAddInfo is a date in the format "yyyy/mm/dd"
    // Info is a string with <= 32chars
    addInfoToDay(dateToAddInfo, info){
        var infoDate = new Date(dateToAddInfo);
        this.ListOfDays.find(day => day.DayOfTheMonth === infoDate.getUTCDate()
            && day.Month12 === infoDate.getUTCMonth()+1
            && day.FullYear === infoDate.getUTCFullYear()).Info.push(info);
    }

    // Contract
    // The dateToAddInfo is a date in the format "yyyy/mm/dd"
    // The oldInfo is a string with <= 32chars
    //      - NECESSARILY the previous info that was there
    // newInfo is a string with <= 32chars
    updateInfoOnDay(dateToAddInfo, oldInfo, newInfo){
        var infoDate = new Date(dateToAddInfo);

        var dayToUpdate = this.ListOfDays.find(day => day.DayOfTheMonth === infoDate.getUTCDate()
            && day.Month12 === infoDate.getUTCMonth()+1
            && day.FullYear === infoDate.getUTCFullYear());

        var indexToUpdate = dayToUpdate.Info.indexOf(oldInfo);
        dayToUpdate.Info[indexToUpdate] = newInfo;
    }

    checkAllAvailableDaysAsComplete(){
        var today = new Date();
        var endDate = new Date(this.EndDate);

        var checkDate = new Date(this.StartDate);

        do{
            this.ListOfDays.find(day => day.DayOfTheMonth === checkDate.getUTCDate()
                && day.Month12 === checkDate.getUTCMonth()+1
                && day.FullYear === checkDate.getUTCFullYear()).Completed = true;
            checkDate.setDate(checkDate.getDate() + 1);
        } while(checkDate <= today && checkDate <= endDate);
    }
}

class Day {
    constructor(day, month12, year, dayOfTheWeek7){
        this.DayOfTheMonth = day;
        this.DayOfTheWeek7 = dayOfTheWeek7;
        this.FullYear = year;
        this.Month12 = month12;
        this.Completed = false;
        this.Info = [];
    }
}