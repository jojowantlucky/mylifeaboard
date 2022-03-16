import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import React from 'react';
import PieChartCostData from '../pages/api/PieChartCostData';

/*
data shape: 
{
  id: '01', 
  category: 'Electrical', 
  totalCost: '$3,240.19'
},
*/

const labels = [];
const cost = [];

PieChartCostData.forEach((item) => {
  labels.push(item.category);
  cost.push(
    parseFloat(item.totalCost.replace(/\$|,/g, ''))
  );
});

console.log('$5,830.32'.substring(1));
console.log('cost: ', cost);

// console.log(labels);

const PieChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              label: '# of votes',
              data: cost,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'left',
              labels: {
                padding: 20,
                font: {
                  size: 16,
                  family: "'Montserrat', sans-serif",
                },
              },
              title: {
                font: {
                  size: 16,
                  family: "'Montserrat', sans-serif",
                },
                display: true,
                text: 'Cost Categories',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
