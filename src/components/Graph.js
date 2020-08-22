import React from 'react';
import Chart from 'chart.js';
import moment from 'moment';

class Graph extends React.Component {
  componentDidMount() {
    const data = [
      {
        t: '2020/08/04',
        y: 28
      },
      {
        t: '2020/08/06',
        y: 38
      }
    ]
    const timeFormat = 'YYYY/MM/DD';
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          this.newDate(0),
          this.newDate(1)
        ],
        datasets: [{
          data: data,
          label: 'BMI',
          backgroundColor: 'rgb(255, 0, 0)',
          borderColor: 'rgb(255, 0, 0)',
          fill: false
        }]
      },
      options: {
        title: {
          text: 'BMI CHART'
        },
        scales: {
          x: {
            type: 'time',
            time: {
              parser: timeFormat
            },
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          },
          y : {
            scaleLabel: {
              display: true,
              labelString: 'BMI'
            }
          }
        }
      }
    });
  }

  newDate(days) {
		return moment().add(days, 'd').toDate();
	}

  render(){
    return <div style={{width: '40%'}}><canvas id="myChart"></canvas></div>;
  }
}

export default Graph;
