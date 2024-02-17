import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function SimpleLineChart() {
  const [color, setColor] = React.useState('#afa17a');
  const [colorTwo, setColorTwo] = React.useState('FFFFDE');

  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', color },
        { data: uData, label: 'uv', colorTwo },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      margin={{
        left: 70,
        right: 80,
        top: 80,
        bottom: 80,
      }}
    />
  );
}
