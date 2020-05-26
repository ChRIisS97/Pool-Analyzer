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
    } else if (id === "pool") {
        document.getElementById("outdoor-value").style.display = "none";
        document.getElementById("pool-value").style.display = "block";
        document.getElementById("active-indikator").style.left = "5%";
        document.getElementById("header-indikator").style.left = "0";
        document.getElementById("control-value").style.display = "none";
    } else if (id === "pool-values") {
        document.getElementById("outdoor-value").style.display = "none";
        document.getElementById("pool-value").style.display = "block";
        document.getElementById("active-indikator").style.left = "5%";
        document.getElementById("control-value").style.display = "none";
    } else if (id === "pool-Values") {
        document.getElementById("header-indikator").style.left = "0";
        document.getElementById("active-indikator").style.display = "block";

        document.getElementById("control-value").style.display = "none";
        document.getElementById("pool-value").style.display = "block";
    } else if (id === "control") {
        document.getElementById("header-indikator").style.left = "34%";
        document.getElementById("active-indikator").style.display = "none";

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
    var total = 40;
    var percent = obtained * 100 / total;
    //console.log(percent);
    document.getElementById('sub-slider').style.width = "" + percent + "%";
    document.getElementById('buhub').innerText = "" + obtained + "";
}, 1000);

//Calculate Value for suitable texts
setInterval(function () {
    var value = document.getElementById('temperaturec').innerText;

    if (value <= "20") {
        return document.getElementById('hubu').innerText = "Wassertemperatur Kalt";
    } else if (value >= "20.5" && value <= "30") {
        return document.getElementById('hubu').innerText = "Wassertemperatur Normal";
    } else if (value >= "31") {
        return document.getElementById('hubu').innerText = "Wassertemperatur Zu Warm";
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
