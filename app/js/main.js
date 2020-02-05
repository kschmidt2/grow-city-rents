// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
        thousandsSep: ',',
    }
});

let chartId = document.getElementById("chart-container");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartId.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartId, {
        chart: {
            type: 'scatter',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1emTlFRn0LG5YQWculO-zMoUUeVK5fCsCUBJzKaB_7o0',
            googleSpreadsheetWorksheet: 2,
            seriesMapping: [{x: 0, y: 1, name: 2, color: 3}],
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            enabled: false
        },
        xAxis: {
            title: {
                text: 'AVERAGE MONTHLY RENT',
            },
            labels: {
                useHTML: true,
                style: {
                    whiteSpace: 'nowrap'
                },
                formatter: function () {
                    return Highcharts.numberFormat(this.value,0,'.',',');
                }
            },
            min: 0,
            max: 5000,
            tickLength: 0,
            tickPosition: 'inside'
        },
        yAxis: {
            title: {
                text: 'MEDIAN HOSUEHOLD INCOME',
            },
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            min: 0,
            max: 100000
        },
        credits: {
            enabled: false
        },
        tooltip: {
            // useHTML: true,
            shadow: false,
            padding: 10,
            formatter: function() {
                point = this.point;
                html=  point.name
                return html;
            }
        },
        annotations: [{
            shapes: [{
                type: 'path',
                points: [{
                    x: 0,
                    y: 0,
                    xAxis: 0,
                    yAxis: 0
                }, {
                    x: 5000,
                    y: 200000,
                    xAxis: 0,
                    yAxis: 0
                }]
            }],
            labels: [{
                point: {
                    x: 5000,
                    y: 58000,
                    yAxis: 0,
                    xAxis: 0
                },
                useHTML: true,
                text: 'Manhattan, N.Y.'
            }, {
                point: {
                    x: 800,
                    y: 52000,
                    yAxis: 0,
                    xAxis: 0
                },
                useHTML: true,
                text: 'Virginia Beach, Va.'
            },{
                point: {
                    x: 4000,
                    y: 92000,
                    yAxis: 0,
                    xAxis: 0
                },
                useHTML: true,
                text: 'San Francisco'
            },{
                point: {
                    x: 4000,
                    y: 38000,
                    yAxis: 0,
                    xAxis: 0
                },
                useHTML: true,
                text: 'Boston'
            }],
        }],
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                xAxis: {
                    max: 6000
                }
            },
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}