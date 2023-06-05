import ChartBar from "./ChartBar";

const Chart = ({ expenses }) => {
  const months = [
    { label: "Jan", value: 0 },
    { label: "Fev", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Avr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aou", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  expenses.forEach((expense) => {
    const dateMonth = expense.date.getMonth();
    months[dateMonth].value += expense.amount;
  });

  const monthsValues = months.map((month) => month.value);

  const max = Math.max(...monthsValues);

  return (
    <div className="chart">
      {months.map((month) => {
        return (
          <ChartBar
            key={month.label}
            label={month.label}
            value={month.value}
            max={max}
          />
        );
      })}
    </div>
  );
};

export default Chart;
