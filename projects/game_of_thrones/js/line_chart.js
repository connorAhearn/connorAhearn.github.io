var lineChart = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(lineChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Start', 'Ep1', 'Ep2', 'Ep3', 'Ep4', 'Ep5', 'Ep6'],
        datasets: [
            {   //['#93d7ff', '#d9c9ff', '#ffe1c9', '#d0ffc9', '#ffc9f0']
                label: 'Adam',
                borderColor: '#93d7ff',
                backgroundColor: "#93d7ff",
                fill: false,
                data: [start[0], episode1[0], episode2[0], episode3[0], episode4[0], episode5[0], episode6[0]]
            },
            {
                label: 'Chris',
                borderColor: '#d9c9ff',
                backgroundColor: "#d9c9ff",
                fill: false,
                data: [start[1], episode1[1], episode2[1], episode3[1], episode4[1], episode5[1], episode6[1]]
            },
            {
                label: 'Connor',
                borderColor: '#ffe1c9',
                backgroundColor: "#ffe1c9",
                fill: false,
                data: [start[2], episode1[2], episode2[2], episode3[2], episode4[2], episode5[2], episode6[2]]
            },
            {
                label: 'Jac',
                borderColor: '#d0ffc9',
                backgroundColor: "#d0ffc9",
                fill: false,
                data: [start[3], episode1[3], episode2[3], episode3[3], episode4[3], episode5[3], episode6[3]]
            },
            {
                label: 'Julia',
                borderColor: '#ffc9f0',
                backgroundColor: "#ffc9f0",
                fill: false,
                data: [start[4], episode1[4], episode2[4], episode3[4], episode4[4], episode5[4], episode6[4]]
            }]
    },

    // Configuration options go here
    options: {
        elements: {
            line: {
                /*
                    This line ensures that lines are straight
                    on our line graph. They were bezier curves
                    by default
                */
                tension: 0
            }
        },

        scales: {
            yAxes: [{
                /*
                    This ensures that the y axis always includes 0
                */
                ticks: { min: 0 }
            }]
        }
    }
});
