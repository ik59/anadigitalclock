var hourHand = document.querySelector(".hour");
var minuteHand = document.querySelector(".minute");
var secondHand = document.querySelector(".second");
var formatHand = document.querySelector("span")
var dayHand = document.querySelector(".day")
var dateHand = document.querySelector(".date")
var monthHand = document.querySelector(".mon")
var yearHand = document.querySelector(".year")

function setClock() {
    var date = new Date();
    var hour = date.getHours();
    var day = date.getDay();
    var tarikh = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var timeFormat = "AM";
    var secondsRatio = date.getSeconds() / 60;
    var minutesRatio = (secondsRatio + date.getMinutes()) / 60;
    var hoursRatio = (minutesRatio + date.getHours()) / 12;
    

    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)

    if(hour > 12) {
        hour = hour - 12;
        timeFormat = "PM"
    }else{
        hour = hour;
        timeFormat = timeFormat;
    }

    if(tarikh < 10) {
        tarikh = "0" + tarikh
    }else{
        tarikh = tarikh
    }

    function getDayName(dayIndex) {
        var dayName = ["sun", "mon", "tue", "wed", "thi", "fri", "sat"]
        return dayName[dayIndex]
        
    }

    function getMonthName(monthIndex) {

        var monthName = ["Jan", "Feb","Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep","Oct", "Nov","Dec"];
        return monthName[monthIndex]
        
    }

    formatHand.innerHTML = timeFormat;
    dayHand.innerHTML = getDayName(day)
    dateHand.innerHTML = tarikh
    monthHand.innerHTML = getMonthName(month)
    yearHand.innerHTML = year



    setInterval(setClock, 1000)
}
setClock()

function setRotation(ele, rotationRatio) {
    ele.style.setProperty('--rotation', rotationRatio * 360)
}