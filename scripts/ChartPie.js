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
      var ctx = document.getElementById("myChart").getContext("2d");
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
  const dataObject = {
    Realestate: 18.05,
    Utilities: 22.33,
    Materials: 3.97,
    Healthcare: 19.24,
    Finance: 5.11,
    Energy: 11.74,
    Industrials: 3.01,
    "Consumer Discretionary": 11.13,
    Other: (
      100 -
      18.05 -
      22.33 -
      3.97 -
      19.24 -
      5.11 -
      11.74 -
      3.01 -
      11.13
    ).toFixed(2),
  };
  var Pica = new Grafico("pie", dataObject, "Abthony's sample Data", 280, 200);
  Pica.createChart("pie");
})();
