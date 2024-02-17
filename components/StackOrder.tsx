import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'Series A',
};
const seriesB = {
  data: [3, 1, 4, 2, 1],
  label: 'Series B',
};
const seriesC = {
  data: [3, 2, 4, 5, 1],
  label: 'Series C',
};
export default function BasicStacking() {
  return (
    <BarChart
      sx={{
        //change left yAxis label styles
        '& .MuiChartsAxis-left .MuiChartsAxis-tickLabel': {
          strokeWidth: '0.4',
          fill: '#ff0000',
        },
        // change all labels fontFamily shown on both xAxis and yAxis
        '& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel': {
          fontFamily: 'Roboto',
        },
        // change bottom label styles
        '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel': {
          strokeWidth: '0.5',
          fill: '#0000FF',
        },
        // bottomAxis Line Styles
        '& .MuiChartsAxis-bottom .MuiChartsAxis-line': {
          stroke: '#0000FF',
          strokeWidth: 0.4,
        },
        // leftAxis Line Styles
        '& .MuiChartsAxis-left .MuiChartsAxis-line': {
          stroke: '#00000FF',
          strokeWidth: 0.4,
        },
      }}
      width={600}
      height={300}
      series={[
        { ...seriesA, stack: 'total' },
        { ...seriesB, stack: 'total' },
        { ...seriesC, stack: 'total' },
      ]}
    />
  );
}
