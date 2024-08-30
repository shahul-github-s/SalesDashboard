const chartData = {
  height: 150,
  type: 'donut',
  options: {
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%'
        }
      }
    },
    labels: ['Profit', 'Expenses'],
    legend: {
      show: false
    },
    tooltip: {
      theme: 'light'
    },
    grid: {
      padding: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    colors: ['#2ed8b6', '#4680ff'],
    fill: {
      opacity: [1, 1]
    },
    stroke: {
      width: 0
    }
  },
  series: [6000, 1500]
};
export default chartData;
