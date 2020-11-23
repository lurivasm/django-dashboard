// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var chart_html = document.getElementById("myBarChart");
new Chart(chart_html, {
    type: 'bar',
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Revenue", // un color para cada barra
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          borderColor: "#4e73df",
          data: [4215, 5312, 6251, 7841, 9821],
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Revenue per month'
      }
    }
});

var chart_html = document.getElementById("myHorizontalChart");
new Chart(chart_html, {
    type: 'horizontalBar',
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Revenue", // un color para cada barra
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          borderColor: "#4e73df",
          data: [4215, 5312, 6251, 7841, 9821],
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Revenue per month'
      }
    }
});

var chart_html = document.getElementById("myBarGroupChart");
new Chart(chart_html, {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "Europe",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});
