import React, { useState, useEffect } from 'react';
import LineChart, { Line } from '@mui/x-charts/LineChart';

const WebSocketLineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [{ data: [] }],
  });
  const [tickerSymbol, setTickerSymbol] = useState('AAPL'); // Example ticker

  useEffect(() => {
    const ws = new WebSocket('wss://websockets.financialmodelingprep.com');

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          event: 'subscribe',
          data: { ticker: tickerSymbol },
        })
      );
    };

    ws.onmessage = (event) => {
      const update = JSON.parse(event.data);

      if (update.t && update.lp) {
        // Assuming 'lp' is the last price
        setChartData((prevData) => ({
          datasets: [
            {
              data: [
                ...prevData.datasets[0].data,
                { x: update.t, y: update.lp },
              ],
            },
          ],
        }));
      }
    };

    return () => ws.close();
  }, [tickerSymbol]);

  return (
    <div>
      {/* Optionally add input to modify tickerSymbol */}
      <LineChart width={800} height={400} data={chartData}>
        {/* Customize axes as needed */}
        <Line />
      </LineChart>
    </div>
  );
};

export default WebSocketLineChart;
