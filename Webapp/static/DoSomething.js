$(document).ready(function () {
    setInterval("loadValues()", 5000)
});
function loadValues(){
    $("temperaturec").load("/myStatus");
}

setInterval(function () {
    let value = document.getElementById('temperaturec').innerText;
    if (value < "24") {
        $('.first').css({'background-image': 'linear-gradient(to top right,  #06485D 0%, #00EDFF 80%)'});
        return document.getElementById('poolValue').innerText = "Cold";
    } else if (value >= "24" && value < "29") {
        $('.first').css({'background-image': 'linear-gradient(to top right,  #005C5D 0%, #00FFED 100%)'});
        return document.getElementById('poolValue').innerText = "Good";
    } else if (value >= "29") {
        $('.first').css({'background-image': 'linear-gradient(to top right,  #EE4D5F 0%, #FFCDA5 100%)'});
        return document.getElementById('poolValue').innerText = "Warm";
    } else {
        return document.getElementById('poolValue').innerText = "Not Set";
    }
}, 4000);
setInterval(function () {
    let value2 = document.getElementById('temperaturecC').innerText;
    if (value2 < "24") {
        $('.space-between-first').css({'background-image': 'linear-gradient(to top right,  #06485D 0%, #00EDFF 80%)'});
        return document.getElementById('OutdoorValue').innerText = "Cold";
    } else if (value2 >= "24" && value2 < "29") {
        $('.space-between-first').css({'background-image': 'linear-gradient(to top right,  #005C5D 0%, #00FFED 100%)'});
        return document.getElementById('OutdoorValue').innerText = "Good";
    } else if (value2 >= "29") {
        $('.space-between-first').css({'background-image': 'linear-gradient(to top right,  #EE4D5F 0%, #FFCDA5 100%)'});
        return document.getElementById('OutdoorValue').innerText = "Warm";
    } else {
        return document.getElementById('OutdoorValue').innerText = "Not Set";
    }
}, 4000);
setInterval(function () {
    let value3 = document.getElementById('temperaturecCc').innerText;
    if (value3 < "24") {
        $('.space-between').css({'background': 'linear-gradient(to top right,  #06485D 0%, #00EDFF 80%)'});
        return document.getElementById('SolarValue').innerText = "Cold";
    } else if (value3 >= "24" && value3 < "29") {
        $('.space-between').css({'background': 'linear-gradient(to top right,  #005C5D 0%, #00FFED 100%)'});
        return document.getElementById('SolarValue').innerText = "Good";
    } else if (value3 >= "29") {
        $('.space-between').css({'background': 'linear-gradient(to top right,  #EE4D5F 0%, #FFCDA5 100%)'});
        return document.getElementById('SolarValue').innerText = "Warm";
    }else {
        return document.getElementById('SolarValue').innerText = "Not Set";
    }
}, 4000);

/*$(document).ready(function() {
    try {
        $('body').ripples({
            resolution: 1012,
            dropRadius: 30, //px
            perturbance: 0.512,
        });
    }
    catch (e) {
        $('.error').show().text(e);
    }
    // Automatic drops
    setInterval(function() {
        let $el = $('body');
        let x = Math.random() * $el.outerWidth();
        let y = Math.random() * $el.outerHeight();
        let dropRadius = 30;
        let strength = 0.1 + Math.random() * 0.06;

        $el.ripples('drop', x, y, dropRadius, strength);
    }, 2000);
});*/

//----------------------------Nav-bar identification--------------------------------
function f(id) {
    if(id === "values"){
        document.getElementById("bl").style.display ="block";
        document.getElementById("blu2").style.display ="none";
        document.getElementById("blu").style.display ="none";
        document.getElementById("content").style.display ="block";
        document.getElementById("control-box").style.display ="none";

        let element = document.getElementById("light");
        element.classList.remove("active");
        let element9 = document.getElementById("control");
        element9.classList.remove("active");

        let element6 = document.getElementById("values");
        element6.classList.add("active");

    }
    else if(id === "control"){
        document.getElementById("blu2").style.display ="none";
        document.getElementById("blu").style.display ="block";
        document.getElementById("bl").style.display ="none";
        document.getElementById("content").style.display ="none";
        document.getElementById("control-box").style.display ="block";

        let element5 = document.getElementById("values");
        element5.classList.remove("active");
        let element3 = document.getElementById("light");
        element3.classList.remove("active");
        let element7 = document.getElementById("control");
        element7.classList.add("active");
    }
    else if(id === "light") {
        document.getElementById("blu2").style.display ="block";
        document.getElementById("bl").style.display ="none";
        document.getElementById("blu").style.display ="none";
        document.getElementById("content").style.display ="none";

        document.getElementById("control-box").style.display ="none";
        let element4 = document.getElementById("values");
        element4.classList.remove("active");
        let element8 = document.getElementById("control");
        element8.classList.remove("active");
        let element2 = document.getElementById("light");
        element2.classList.add("active");
    }
}

//----------------------------On/Off Buttons--------------------------------
function buttonOn(id) {
    if (id === "on1"){
        document.getElementById(id).style.fontWeight = "bold";
        document.getElementById(id).style.color = "#004543";
        document.getElementById("test").style.backgroundColor = "white";
        document.getElementById("test").style.left = "5px";
        document.getElementById("off1").style.fontWeight = "unset";
        document.getElementById("ON").innerHTML = "AN";
        document.getElementById("OnTimer").style.visibility = "visible";
    }
    else if (id === "on2"){
        document.getElementById(id).style.fontWeight = "bold";
        document.getElementById(id).style.color = "#004543";
        document.getElementById("test2").style.backgroundColor = "white";
        document.getElementById("test2").style.left = "5px";
        document.getElementById("off2").style.fontWeight = "unset";
        document.getElementById("ON-2").innerHTML = "AN";
        document.getElementById("OnTimer2").style.visibility = "visible";
    }
    else if (id === "on3"){
        document.getElementById(id).style.fontWeight = "bold";
        document.getElementById(id).style.color = "#004543";
        document.getElementById("test3").style.backgroundColor = "white";
        document.getElementById("test3").style.left = "5px";
        document.getElementById("off3").style.fontWeight = "unset";
        document.getElementById("ON-3").innerHTML = "AN";
        document.getElementById("OnTimer3").style.visibility = "visible";
    }
    else{
        alert("unexpected error, please try again")
    }
}
function buttonOff(id) {
    if (id === "off1") {
        document.getElementById("ON").innerHTML = "AUS";
        document.getElementById(id).style.fontWeight = "bold";
        document.getElementById(id).style.color = "white";
        document.getElementById("on1").style.color = "unset";
        document.getElementById("on1").style.fontWeight = "unset";
        document.getElementById("test").style.backgroundColor = "#004543";
        document.getElementById("test").style.left = "unset";
        document.getElementById("OnTimer").style.visibility = "hidden";
    }
    else if (id === "off2"){
        document.getElementById("ON-2").innerHTML = "AUS";
        document.getElementById(id).style.fontWeight = "bold";
        document.getElementById(id).style.color = "white";
        document.getElementById("on2").style.color = "unset";
        document.getElementById("on2").style.fontWeight = "unset";
        document.getElementById("test2").style.backgroundColor = "#004543";
        document.getElementById("test2").style.left = "unset";
        document.getElementById("OnTimer2").style.visibility = "hidden";
    }
    else if (id === "off3"){
        document.getElementById("ON-3").innerHTML = "AUS";
        document.getElementById(id).style.fontWeight = "bold";
        document.getElementById(id).style.color = "white";
        document.getElementById("on3").style.color = "unset";
        document.getElementById("on3").style.fontWeight = "unset";
        document.getElementById("test3").style.backgroundColor = "#004543";
        document.getElementById("test3").style.left = "unset";
        document.getElementById("OnTimer3").style.visibility = "hidden";
    }
    else{
        alert("unexpected error, please try again")
    }
}

//----------------------------timer for how long your pump is on--------------------------------
var timerVar;
var timerVar2;
var timerVar3;
function counter(id) {
    if (id === "on1") {
        timerVar = setInterval(countTimer, 1000);
        var totalSeconds = 0;
        function countTimer() {
            ++totalSeconds;
            var hour = Math.floor(totalSeconds / 3600);
            var minute = Math.floor((totalSeconds - hour * 3600) / 60);
            var seconds = totalSeconds - (hour * 3600 + minute * 60);
            if (hour < 10)
                hour = "0" + hour;
            if (minute < 10)
                minute = "0" + minute;
            if (seconds < 10)
                seconds = "0" + seconds;
            document.getElementById("OnTimer").innerHTML = hour + ":" + minute + ":" + seconds;
        }
    }
    else if (id ==="on2") {
        timerVar2 = setInterval(countTimer2, 1000);
        var totalSeconds2 = 0;
        function countTimer2() {
            ++totalSeconds2;
            var hour = Math.floor(totalSeconds2 / 3600);
            var minute = Math.floor((totalSeconds2 - hour * 3600) / 60);
            var seconds = totalSeconds2 - (hour * 3600 + minute * 60);
            if (hour < 10)
                hour = "0" + hour;
            if (minute < 10)
                minute = "0" + minute;
            if (seconds < 10)
                seconds = "0" + seconds;
            document.getElementById("OnTimer2").innerHTML = hour + ":" + minute + ":" + seconds;
        }
    }
    else if (id ==="on3") {
        timerVar3 = setInterval(countTimer3, 1000);
        var totalSeconds3 = 0;
        function countTimer3() {
            ++totalSeconds3;
            var hour = Math.floor(totalSeconds3 / 3600);
            var minute = Math.floor((totalSeconds3 - hour * 3600) / 60);
            var seconds = totalSeconds3 - (hour * 3600 + minute * 60);
            if (hour < 10)
                hour = "0" + hour;
            if (minute < 10)
                minute = "0" + minute;
            if (seconds < 10)
                seconds = "0" + seconds;
            document.getElementById("OnTimer3").innerHTML = hour + ":" + minute + ":" + seconds;
        }
    }
}
function stopCounter(id) {
    if(id === "off1") {
        document.getElementById("OnTimer").innerHTML = "00:00:00";
        clearTimeout(timerVar);
    }else if(id === "off2") {
        document.getElementById("OnTimer2").innerHTML = "00:00:00";
        clearTimeout(timerVar2);
    }else if(id === "off3") {
        document.getElementById("OnTimer3").innerHTML = "00:00:00";
        clearTimeout(timerVar3);
    }
}
