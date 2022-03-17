import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useEffect, useState } from 'react';
import getChartColors from '../lib/getChartColors';
import dedupeCategories from '../lib/dedupeCategories';
import getAllTransactions from '../pages/api/getAllTransactions';
import sumCategoryCosts from '../lib/sumCategoryCosts';

const PieChart = (props) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const getTransactions = async () => {
      getAllTransactions().then((transactions) => {
        setTransactions(transactions);
      });
    };
    getTransactions();
  }, []);

  if (transactions.length > 0) {
    const colors = getChartColors(transactions.length);
    // console.log(transactions);

    const categories = dedupeCategories(transactions);
    // console.log('categories: ', categories);

    const costs = sumCategoryCosts(transactions);
    // console.log('costs: ', costs);
  }

  return (
    <div>
      <Pie
        data={{
          // labels: categories,
          datasets: [
            {
              label: 'Cost Breakdown',
              // data: costs,
              // backgroundColor: backgroundColor,
              // borderColor: borderColor,
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
                text: 'Click to Remove',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
