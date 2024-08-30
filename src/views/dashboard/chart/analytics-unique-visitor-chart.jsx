const chartData = {
  height: 200,
  type: 'line',
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 4,
      curve: 'smooth'
    },
    legend: {
      position: 'top'
    },
    xaxis: {
      type: 'datetime',
      categories: ['1/31/2024', '2/28/2024', '3/31/2024', '4/30/2024', '5/31/2024', '6/30/2024', '7/31/2024'],
      axisBorder: {
        show: false
      },
      label: {
        style: {
          color: '#ccc'
        }
      }
    },
    yaxis: {
      show: true,
      min: 10,
      max: 70,
      labels: {
        style: {
          color: '#ccc'
        }
      }
    },
    colors: ['#73b4ff', '#59e0c5'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        gradientToColors: ['#4099ff', '#2ed8b6'],
        shadeIntensity: 0.5,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    markers: {
      size: 5,
      colors: ['#4099ff', '#2ed8b6'],
      opacity: 0.9,
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    grid: {
      borderColor: '#cccccc3b'
    }
  },
  series: [
    {
      name: 'Existing Customers',
      data: [20, 50, 30, 60, 30, 50, 20]
    },
    {
      name: 'Hot Lead',
      data: [60, 30, 65, 45, 67, 35, 60]
    }
  ]
};
export default chartData;
