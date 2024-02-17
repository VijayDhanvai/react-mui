import * as React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Rect,
} from '@mui/x-charts';

// import { BarChart } from '@mui/x-charts/BarChart';

const data = [
  { category: 'A', series1: 40, series2: 25 },
  { category: 'B', series1: 30, series2: 50 },
  { category: 'C', series1: 60, series2: 10 },
];

const chartHeight = 300;
const barSpacing = 2;
const cornerRadius = 5;
const numBarsPerCategory = 2; // Assuming 2 bars per category
const totalBarWidth = 80; // Total width allocated for a group of bars
const maxValue = data.reduce(
  (max, item) => Math.max(max, item.series1 + item.series2),
  0
);

function StackOrderModified() {
  return (
    <BarChart data={data}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      {console.log('Data in StackOrderModified:', data)}

      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Rect
            x={calculateXPosition(item, index)}
            y={calculateYPosition(item, index)}
            width={calculateBarWidth(index)}
            height={calculateBarHeight(item)}
            rx={cornerRadius}
            ry={cornerRadius}
            fill="#fff" // Match your chart's background color
          />
          <Bar
            stackId="stack1"
            dataKey="series1"
            stackOffset="expand"
            // ... any additional Bar props
          />
          <Bar
            stackId="stack1"
            dataKey="series2"
            stackOffset="expand"
            // ... any additional Bar props
          />
        </React.Fragment>
      ))}
    </BarChart>
  );
}

// **** Helper Functions ****
function calculateXPosition(item, index) {
  console.log('Current Item within Map:', item);
  const barIndexInGroup = index % numBarsPerCategory;
  const groupIndex = Math.floor(index / numBarsPerCategory);
  return (
    groupIndex * totalBarWidth +
    barIndexInGroup * (totalBarWidth / numBarsPerCategory) +
    barSpacing
  );
}

function calculateYPosition(item, index) {
  console.log('Current Item within Map:', item);

  // Assuming a vertical chart where 0 is at the bottom
  return chartHeight - calculateBarHeight(item);
}

function calculateBarWidth(index) {
  // console.log(' calculateBarWidth item', item);

  return totalBarWidth / numBarsPerCategory - barSpacing * 2;
}

function calculateBarHeight(item) {
  console.log('Current Item within Map:', item);

  const hasData = item.series1 !== undefined && item.series2 !== undefined; // Check for existence
  const value = hasData ? item.series1 + item.series2 : 0; // Use 0 if data is missing
  //const value = item['series1'] + item['series2']; // assumes stacked
  const proportionOfChartHeight = value / maxValue; // maxValue would be the maximum sum in your data
  return chartHeight * proportionOfChartHeight;
}

export default StackOrderModified;
