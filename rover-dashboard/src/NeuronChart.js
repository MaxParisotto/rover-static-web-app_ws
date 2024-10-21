import { Line } from 'react-chartjs-2';

const NeuronChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Neuron Activations',
        data: data.values,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default NeuronChart;