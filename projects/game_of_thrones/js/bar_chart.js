var barChart = document.getElementById('barChart').getContext('2d');
var chart = new Chart(barChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Adam', 'Chris', 'Connor', 'Jac', 'Julia'],
        datasets: [{
            label: 'Total Prediction Score',
            backgroundColor: ['#93d7ff', '#d9c9ff', '#ffe1c9', '#d0ffc9', '#ffc9f0'],
            data: [episode6[0], episode6[1], episode6[2], episode6[3], episode6[4], episode6[5]]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: { min: 0 }
            }]
        }
    }
});

Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        min: 0
    }
});