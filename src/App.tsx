import { BarChartData } from "./assets/data/ChartData";
import Chart from "./components/Chart";

function App() {
  const chartData = {
    labels: BarChartData.map((data) => data.name),
    datasets: [
      {
        label: "Expenses",
        data: BarChartData.map((data) => data.amt),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 p-10">
        <Chart chartData={chartData} chartType="bar" />
        <Chart chartData={chartData} chartType="line" />
        <Chart chartData={chartData} chartType="pie" />
        <Chart chartData={chartData} chartType="doughnut" />
      </div>
    </>
  );
}

export default App;
