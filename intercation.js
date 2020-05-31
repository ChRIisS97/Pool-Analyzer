$('.right-side').click(function () {
    $('.right-side').toggleClass('close');
});

function switchGraph(id) {
    if (id === "outdoor") {
        document.getElementById("outdoor-value").style.display = "block";
        document.getElementById("pool-value").style.display = "none";
        document.getElementById("control-value").style.display = "none";
        document.getElementById("active-indikator").style.left = "40%";
        document.getElementById("header-indikator").style.left = "0";
        document.getElementById("timer-sub").style.display = "block";
    } else if (id === "pool") {
        document.getElementById("outdoor-value").style.display = "none";
        document.getElementById("pool-value").style.display = "block";
        document.getElementById("active-indikator").style.left = "5%";
        document.getElementById("header-indikator").style.left = "0";
        document.getElementById("control-value").style.display = "none";
        document.getElementById("timer-sub").style.display = "block";
    } else if (id === "pool-values") {
        document.getElementById("outdoor-value").style.display = "none";
        document.getElementById("pool-value").style.display = "block";
        document.getElementById("active-indikator").style.left = "5%";
        document.getElementById("control-value").style.display = "none";
    } else if (id === "pool-Values") {
        document.getElementById("header-indikator").style.left = "0";
        document.getElementById("active-indikator").style.display = "block";
        document.getElementById("timer-sub").style.display = "block";

        document.getElementById("control-value").style.display = "none";
        document.getElementById("pool-value").style.display = "block";
    } else if (id === "control") {
        document.getElementById("header-indikator").style.left = "34%";
        document.getElementById("active-indikator").style.display = "none";
        document.getElementById("timer-sub").style.display = "none";

        document.getElementById("outdoor-value").style.display = "none";
        document.getElementById("pool-value").style.display = "none";
        document.getElementById("control-value").style.display = "block";
    } else if (id === "settings") {
        document.getElementById("header-indikator").style.left = "75%";
        document.getElementById("active-indikator").style.display = "none";
        document.getElementById("control-value").style.display = "none";
    }
}

function check(id) {
    if(id === "pool" || id === "outdoor"){
        var element3 = document.getElementById("control");
        element3.classList.remove("active");
        var element4 = document.getElementById("settings");
        element4.classList.remove("active");
        var element2 = document.getElementById("pool-Values");
        element2.classList.add("active");
        document.getElementById("active-indikator").style.display = "block";
    }

}

var btnContainer = document.getElementById("selection");
var btns = btnContainer.getElementsByClassName("column");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//Calculate Value to percentage for Slider
setInterval(function () {
    var obtained = document.getElementById('temperaturec').innerText;
    var total = 50;
    var percent = obtained * 100 / total;
    //console.log(percent);
    document.getElementById('sub-slider').style.width = "" + percent + "%";
    document.getElementById('buhub').innerText = "" + obtained + "";
}, 1000);

//Calculate Value for suitable texts
setInterval(function () {
    var value = document.getElementById('temperaturec').innerText;

    if (value <= "23.5") {
        document.getElementById('hubu').innerText = "Zum Baden längeren Baden nicht optimal";
        document.getElementById('hubu').style.color = "rgba(0,119,157,0.4)";
        return document.getElementById('hubu-text').innerText = "Optimaler Schwimmbereich liegt bei ungefähren 25-27 Grad, da der eigene Körper eine Temperatur von 27 grad besitzt und so auch längere Zyklen im Wasser bleiben kann ohne zu unterkühlen.";
    } else if (value >= "24" && value <= "29") {
        document.getElementById('hubu').innerText = "Wassertemperatur optimal zum längeren Baden";
        return document.getElementById('hubu-text').innerText = "Optimaler Schwimmbereich für längere Schwimmzyklen als auch zur Entspannung der eigenen Muskulatur und deren Regeneration.";
    } else if (value >= "30") {
        document.getElementById('hubu').innerText = "Abkühlung nur kurze Zeit";
        document.getElementById('hubu').style.color = "rgba(85, 6, 2, 0.51)";
        return document.getElementById('hubu-text').innerText = "Zu warmer Schwimmbereich für eine langfristige Erholung des eigenen Körpers aber für einen längeren Aufenthalt im Becken ohne Probleme möglich";
    } else {
        return document.getElementById('hubu').innerText = "Value not correct";
    }
}, 4000);

//Get Values from ESP Sensors
setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("temperaturec").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/temperaturec", true);
    xhttp.send();
}, 2000);
setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("temperatures").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/temperatures", true);
    xhttp.send();
}, 2000);



//timer for how long your pump is on
var timerVar;
var timerVar2;
function counter() {
    if (document.getElementById('myonoffswitch').checked) {

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
            document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
            document.getElementById("timer-sub").innerHTML = hour + ":" + minute + ":" + seconds;
            document.getElementById("timer").style.color = "#3498db";
        }
    } else {
        document.getElementById("timer").innerHTML = "00:00:00";
        document.getElementById("timer-sub").innerHTML = "00:00:00";
        document.getElementById("timer").style.color = "unset";
        clearTimeout(timerVar);
    }
}
function counter2() {
    if (document.getElementById('myonoffswitch2').checked) {

        timerVar2 = setInterval(countTimer, 1000);
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
            document.getElementById("timer2").innerHTML = hour + ":" + minute + ":" + seconds;
            document.getElementById("timer2").style.color = "#3498db";
        }
    } else {
        document.getElementById("timer2").innerHTML = "00:00:00";
        document.getElementById("timer2").style.color = "unset";
        clearTimeout(timerVar2);
    }
}
