var pieDataObject = {
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

var barChartData = [
  {
    period: "autumn 2011",
    openedPositions: 680,
    closedPositions: 340,
    stack: "2011a",
  },
  {
    period: "winter 2011",
    openedPositions: 1150,
    closedPositions: 610,
    stack: "2011b",
  },
  {
    period: "spring 2011",
    openedPositions: 560,
    closedPositions: 1100,
    stack: "2011c",
  },
  {
    period: "summer 2011",
    openedPositions: 880,
    closedPositions: 770,
    stack: "2011d",
  },
  {
    period: "autumn 2012",
    openedPositions: 60,
    closedPositions: 95,
    stack: "2012a",
  },
  {
    period: "winter 2012",
    openedPositions: 200,
    closedPositions: 1800,
    stack: "2012b",
  },
  {
    period: "spring 2012",
    openedPositions: 350,
    closedPositions: 1600,
    stack: "2012c",
  },
  {
    period: "summer 2012",
    openedPositions: 400,
    closedPositions: 1300,
    stack: "2012d",
  },
  {
    period: "autumn 2013",
    openedPositions: 60,
    closedPositions: 95,
    stack: "2013a",
  },
  {
    period: "winter 2013",
    openedPositions: 200,
    closedPositions: 1800,
    stack: "2013b",
  },
  {
    period: "spring 2013",
    openedPositions: 350,
    closedPositions: 1600,
    stack: "2013c",
  },
  {
    period: "summer 2013",
    openedPositions: 400,
    closedPositions: 1300,
    stack: "2013d",
  },
  {
    period: "autumn 2014",
    openedPositions: 1100,
    closedPositions: 350,
    stack: "2014a",
  },
  {
    period: "winter 2014",
    openedPositions: 800,
    closedPositions: 600,
    stack: "2014b",
  },
  {
    period: "spring 2014",
    openedPositions: 650,
    closedPositions: 350,
    stack: "2014c",
  },
  {
    period: "summer 2014",
    openedPositions: 940,
    closedPositions: 485,
    stack: "2014d",
  },
  {
    period: "autumn 2015",
    openedPositions: 1100,
    closedPositions: 700,
    stack: "2015a",
  },
  {
    period: "winter 2015",
    openedPositions: 830,
    closedPositions: 1050,
    stack: "2015b",
  },
  {
    period: "spring 2015",
    openedPositions: 650,
    closedPositions: 1520,
    stack: "2015c",
  },
  {
    period: "summer 2015",
    openedPositions: 450,
    closedPositions: 1680,
    stack: "2015d",
  },
  {
    period: "autumn 2016",
    openedPositions: 500,
    closedPositions: 500,
    stack: "2016a",
  },
  {
    period: "winter 2016",
    openedPositions: 420,
    closedPositions: 380,
    stack: "2016b",
  },
  {
    period: "spring 2016",
    openedPositions: 800,
    closedPositions: 650,
    stack: "2016c",
  },
  {
    period: "summer 2016",
    openedPositions: 900,
    closedPositions: 1000,
    stack: "2016d",
  },
];
