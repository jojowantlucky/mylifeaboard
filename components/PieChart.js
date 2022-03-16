import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import React from 'react';
import PieChartCostData from '../pages/api/dummyPieChartCostData';

const labels = [];
const cost = [];
const backgroundColor = [];
const borderColor = [];

const randomColorGenerator = () => {
  const r = Math.floor(Math.random() * 175) + 100;
  const g = Math.floor(Math.random() * 150) + 100;
  const b = Math.floor(Math.random() * 175) + 100;

  const background = `rgba(${r}, ${g}, ${b}, 0.5)`;
  const border = `rgba(${r}, ${g}, ${b}, 1)`;

  return [background, border];
};

PieChartCostData.forEach((item) => {
  const colors = randomColorGenerator();
  labels.push(item.category);
  cost.push(
    parseFloat(item.totalCost.replace(/\$|,/g, ''))
  );
  backgroundColor.push(colors[0]);
  borderColor.push(colors[1]);
});

const PieChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Cost Breakdown',
              data: cost,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
          ],
        }}
        height={600}
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
