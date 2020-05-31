let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = 'rgba(0,78,103,0.45)';
            ctx.shadowBlur = 15;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            _stroke.apply(this, arguments);
            ctx.restore();
        }
    }
});

//On Page load show graphs
window.onload = function() {
    //console.log(new Date().toLocaleTimeString());
    showGraph(5);
    showGraph2(5);
};

//------------------first graph
var values = [];
var idealValue = [];
var timeStamp = [];

function showGraph() {
    for (i = 0; i < arguments.length; i++) {
        values.push(arguments[i]);
        idealValue.push(arguments[i]);
    }

    var ctx = document.getElementById("pool-chart").getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 255);
    gradient.addColorStop(0, 'rgba(39,124,135,0.35)');
    gradient.addColorStop(1, 'rgba(13,166,188,0)');

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeStamp,	//Bottom Labeling
            datasets: [{
                label: "Pool Temperatur",
                fill: true,	//Try with true
                borderColor: '#007ea5',
                borderWidth: 6,
                backgroundColor: gradient,
                data: values,
            },{
                label: 'Pool Temperatur',
                fill: true,	//Try with true
                borderColor: 'rgba(85,85,85,0.11)',
                backgroundColor: 'rgba(85,85,85,0.11)',
                data: idealValue,
            }],
        },
        options: {
            elements: {
                point:{
                    radius: 3
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    padding: 30,
                    boxWidth: 5
                }
            },
            line: {
                tension: 0.5 //Smoothening (Curved) of data lines
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)",
                    },
                }],
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)",
                    },
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });
}
function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var time = new Date().toLocaleTimeString();
            var ADCValue = this.responseText;
            values.push(ADCValue);
            idealValue.push(25);
            timeStamp.push(time);
            showGraph();	//Update Graphs
        }
    };
    xhttp.open("GET", "temperaturec", true);	//Handle readADC server on ESP8266
    xhttp.send();
}

//-------------------Second graph
var values2 = [];
var idealValue2 = [];
var timeStamp2 = [];

function showGraph2() {
    for (i = 0; i < arguments.length; i++) {
        values.push(arguments[i]);
        idealValue2.push(arguments[i]);
    }
    
    var ctx = document.getElementById("outdoor-chart").getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 255);
    gradient.addColorStop(0, 'rgba(39,124,135,0.35)');
    gradient.addColorStop(1, 'rgba(13,166,188,0)');
    
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeStamp2,	//Bottom Labeling
            datasets: [{
                label: "Außentemperatur",
                fill: true,	//Try with true
                borderColor: '#007ea5',
                backgroundColor: gradient,
                data: values2,
            },{
                label: 'Außentemperatur',
                fill: true,	//Try with true
                borderColor: 'rgba(85,85,85,0.11)',
                backgroundColor: 'rgba(85,85,85,0.11)',
                data: idealValue2,
            }],
        },
        options: {
            elements: {
                point:{
                    radius: 0
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    padding: 30,
                    boxWidth: 5
                }
            },
            line: {
                tension: 0.5 //Smoothening (Curved) of data lines
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)",
                    },
                }],
                xAxes: [{
                    gridLines: {
                        borderDash: [3, 12],
                        color: "rgba(125,125,125,0.31)",
                    },
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });
}
function getData2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var time = new Date().toLocaleTimeString();
            var ADCValue = this.responseText;
            values2.push(ADCValue);
            idealValue2.push(24);
            timeStamp2.push(time);
            showGraph2();	//Update Graphs
        }
    };
    xhttp.open("GET", "temperatures", true);	//Handle readADC server on ESP8266
    xhttp.send();
}


setInterval(function() {
    getData();
    getData2()
}, 5000); //5000mSeconds update rate
