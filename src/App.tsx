import { CategoryScale, Chart, defaults } from "chart.js/auto";

import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import DoughnutChart from "./components/DoughnutChart";

import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
// defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

Chart.register(CategoryScale);
const App = () => {
  return (
    <main className="app">
      <LineChart revenueData={revenueData} />
      <BarChart sourceData={sourceData} />
      <DoughnutChart sourceData={sourceData} />
    </main>
  );
};

export default App;