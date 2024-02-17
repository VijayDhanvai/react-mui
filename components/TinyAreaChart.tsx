import * as React from 'react';
import { ChartContainer, AreaPlot } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function TinyAreaChart() {
  return (
    // <LineChart series={[{ ..., color: '#fdb462'}]} />

    <ChartContainer
      width={400}
      height={300}
      series={[
        {
          data: uData,
          type: 'line',
          label: 'uv',
          area: true,
          stack: 'total',
        },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      margin={{
        left: 80,
        right: 80,
        top: 80,
        bottom: 80,
      }}
    >
      <AreaPlot />
    </ChartContainer>
  );
}
