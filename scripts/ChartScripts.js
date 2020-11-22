(function () {
  class Grafico {
    constructor(type, data, title, width, height, colors, radius, innerRadius) {
      this.paramType = type;
      this.data = data;
      this.title = title;
      this.width = width;
      this.height = height;
    }

    createChart() {
      if (this.paramType === "pie") {
        return this.createPieChart();
      } else if (this.paramType === "bar") {
        return this.createBarChart();
      }
    }

    createBarChart() {
      var piectx = document.getElementById(this.paramType).getContext("2d");
      var myArr = [];
      var maximumValue = 0;

      this.data.forEach(({ openedPositions, closedPositions, stack }) => {
        if (openedPositions > closedPositions && openedPositions > maximumValue)
          maximumValue = openedPositions;
        else if (
          closedPositions > openedPositions &&
          closedPositions > maximumValue
        )
          maximumValue = closedPositions;
        let a = {
          label: ["Opened"],
          data: [openedPositions],
          stack: stack,
          backgroundColor: "red",
        };
        let b = {
          label: ["Closed"],
          data: [-closedPositions],
          stack: stack,
          backgroundColor: "blue",
        };
        myArr.push(a);
        myArr.push(b);
      });
      console.log("mydata:", myArr);

      return new Chart(piectx, {
        type: this.paramType,
        title: this.title,
        data: {
          labels: [""],
          datasets: myArr,
        },
        options: {
          // plugins: {
          //   colorschemes: {
          //     scheme: "office.Adjacency6",
          //     //https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html
          //     //https://github.com/nagix/chartjs-plugin-colorschemes
          //   },
          // },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
                ticks: {
                  max: maximumValue,
                  stepSize: maximumValue / 3,
                  maxTicksLimit: 6,
                  beginAtZero: true,
                  min: -maximumValue,
                },
              },
            ],
          },
        },
      });
    }

    createPieChart() {
      console.log(document.getElementById(this.paramType));

      var ctx = document.getElementById(this.paramType).getContext("2d");
      return new Chart(ctx, {
        type: this.paramType,
        title: this.title,
        data: {
          labels: Object.keys(this.data),
          datasets: [
            {
              label: "# of Votes",
              data: Object.values(this.data),
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            colorschemes: {
              scheme: "office.Adjacency6",
              //https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html
              //https://github.com/nagix/chartjs-plugin-colorschemes
            },
          },
        },
      });
    }
  }

  var ChartOneInstance = new Grafico(
    "pie",
    pieDataObject,
    "Anthony's pie chart sample Data"
  );
  var ChartTwoInstance = new Grafico(
    "bar",
    barChartData,
    "Anthony's pie chart sample Data"
  );

  ChartOneInstance.createChart();
  ChartTwoInstance.createChart();
})();

const optionsRanking = {
  maintainAspectRatio: false,
  deferred: {
    enabled: false,
    delay: 1000,
    yOffset: 300,
  },
  events: [],
  legend: {
    display: false,
    fullWidth: false,
    position: "bottom",
  },
  hover: { mode: null },
  scales: {
    yAxes: [
      {
        stacked: true,
      },
    ],
    xAxes: [
      {
        stacked: true,
        ticks: {
          max: 100,
          stepSize: 25,
        },
      },
    ],
  },
};
