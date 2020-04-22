$(document).ready(function () {
    var month = ['Gennaio','Febbraio','Marzo','Aprile', 'Maggio','Giugno', 'Luglio', 'Agosto', 'Settembre','Novembre','Dicembre']
    // var data = [1000, 1322, 1123, 2301, 3288, 988, 502, 2300, 5332, 2300, 1233, 2322];
    var data = $('#chart1').data('database');
    var ctx = $('#chart1');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: month,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'lighgrey',
                borderColor: 'black',
                data: data
            }]
        },
    });

});
