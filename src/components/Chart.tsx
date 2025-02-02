import DynamicChart from "./DynamicChart";

const Chart = ({ chartData, chartType }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Dynamic Chart Example",
      },
    },
  };
  return (
    <div className="flex-1">
      <div className="chart">
        <DynamicChart type={chartType} data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Chart;
