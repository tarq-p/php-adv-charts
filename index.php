<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <link rel="stylesheet" href="css/master.css">
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <div class="container">
            <canvas id="chart1"></canvas>
        </div>

        <script>
        $(document).ready(function () {
            var month = ['Gennaio','Febbraio','Marzo','Aprile', 'Maggio','Giugno', 'Luglio', 'Agosto', 'Settembre','Novembre','Dicembre']
            <?php include 'data.php'; ?>
            var data = <?php echo $database; ?>;
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
        </script>
        <!-- <script src="js/main.js" charset="utf-8"></script> -->
    </body>
</html>
