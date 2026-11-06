(function($) {
    "use strict"


     // LINE CHART
      // Morris bar chart
 Morris.Bar({
    element: 'morris-bar-chart',
    data: [{
        y: '2016',
        a: 100,
        b: 90,
    }, {
        y: '2017',
        a: 75,
        b: 65,
    }, {
        y: '2018',
        a: 50,
        b: 40,
    }, {
        y: '2019',
        a: 75,
        b: 65,
    }, {
        y: '2020',
        a: 50,
        b: 40,
    }, {
        y: '2021',
        a: 75,
        b: 65,
    }, {
        y: '2022',
        a: 100,
        b: 90,
    }],
    xkey: 'y',
    ykeys: ['a', 'b', 'c'],
    labels: ['A', 'B', 'C'],
    barColors: ['#FC6C8E', 'var(--primary)'],
    hideHover: 'auto',
    gridLineColor: 'transparent',
    resize: true
});









})(jQuery);


(function($) {
    "use strict"

    $('#activity').slimscroll({
        position: "right",
        size: "5px",
        height: "390px",
        color: "transparent"
    });





})(jQuery);



(function($) {
    "use strict"

    let ctx = document.getElementById("chart_widget_2");
    ctx.height = 280;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [{
                data: [0, 15, 57, 12, 85, 10, 50],
                label: "iPhone X",
                backgroundColor: '#847DFA',
                borderColor: '#847DFA',
                borderWidth: 0.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#847DFA',
            }, {
                label: "Pixel 2",
                data: [0, 30, 5, 53, 15, 55, 0],
                backgroundColor: '#F196B0',
                borderColor: '#F196B0',
                borderWidth: 0.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: '#F196B0',
            }]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },


            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: '月份'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '数值'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });


    


})(jQuery);


/*******************
Pignose Calender
*******************/
(function ($) {
    "use strict";

    $(".year-calendar").pignoseCalendar({
        theme: "blue"
    }), $("input.calendar").pignoseCalendar({
        format: "YYYY-MM-DD"
    });

})(jQuery);