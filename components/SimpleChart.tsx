import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
export default function SimpleCharts() {
  return (
    <>
      <BarChart
        series={[
          { data: [3, 4, 5], stack: 'A' },
          { data: [4, 3, 5], stack: 'A' },
          { data: [4, 8, 5], stack: 'A' },
        ]}
        width={500}
        height={300}
        xAxis={[
          {
            data: ['bar A', 'bar B', 'bar C'],
            scaleType: 'band',
          },
        ]}
        margin={{
          left: 80,
          right: 80,
          top: 80,
          bottom: 80,
        }}
      />
    </>
  );
}
