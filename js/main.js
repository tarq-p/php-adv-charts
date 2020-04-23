$(document).ready(function() {

    // Milestone 1

    // var month = ['Gennaio','Febbraio','Marzo','Aprile', 'Maggio','Giugno', 'Luglio', 'Agosto', 'Settembre','Novembre','Dicembre']
    // // var data = [1000, 1322, 1123, 2301, 3288, 988, 502, 2300, 5332, 2300, 1233, 2322];
    // var data = $('#chart1').data('database');
    // var ctx = $('#chart1');
    // var chart = new Chart(ctx, {
    //     type: 'line',
    //     data: {
    //         labels: month,
    //         datasets: [{
    //             label: 'My First dataset',
    //             backgroundColor: 'lighgrey',
    //             borderColor: 'black',
    //             data: data
    //         }]
    //     },
    // });

    // Milestone 2

    $.ajax({
        url: 'server.php',
        method: 'GET',
        success: function(data) {
            lineChart(data);
            pieChart(data);

        },
        error: function() {
            alert('Non va!')
        }
    });

    function lineChart(dataInput) {
        var ctx = $('#lineChart');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                datasets: [{
                    label: 'Fatturato 2018',
                    backgroundColor: 'blue',
                    borderColor: 'lightblue',
                    lineTension: 0.3,
                    data: dataInput.fatturato.data
                }]
            }
        });
    }

    function pieChart(dataInput) {
        var salesname = Object.keys(dataInput.fatturato_by_agent.data);
        var salesforagent = Object.values(dataInput.fatturato_by_agent.data);
        var ctx = $('#pieChart');
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: salesname,
                datasets: [{
                    data: salesforagent,
                    backgroundColor: ['red', 'green', 'blue', 'yellow']
                }]
            },
        });
    }

});
