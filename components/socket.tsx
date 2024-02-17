import React, { useState, useEffect } from 'react';
import LineChart, { Line } from '@mui/x-charts/LineChart';

const WebSocketLineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [{ data: [] }],
  });
  const [tickerSymbol, setTickerSymbol] = useState('AAPL');
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const maxRetries = 5;
  const initialRetryDelay = 1000;

  useEffect(() => {
    let ws = null;

    const connectWebSocket = () => {
      const delay = Math.min(initialRetryDelay * 2 ** retryCount, 30000);

      setConnectionStatus('connecting');
      setTimeout(() => {
        ws = new WebSocket('wss://websockets.financialmodelingprep.com');

        ws.onopen = () => {
          console.log('WebSocket connection opened');
          setConnectionStatus('connected');
          ws.send(
            JSON.stringify({
              event: 'subscribe',
              data: { ticker: tickerSymbol },
            })
          );
          setRetryCount(0);
        };

        ws.onmessage = (event) => {
          try {
            const update = JSON.parse(event.data);

            if (update.t && update.lp) {
              // Assuming 't' is timestamp, 'lp' is last price
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
            } else {
              console.error('Invalid data format:', update);
            }
          } catch (error) {
            setError('Error parsing WebSocket data');
            console.error(error);
          }
        };

        ws.onerror = (event) => {
          setError('WebSocket connection error');
          setConnectionStatus('disconnected');
          setRetryCount(retryCount + 1);
        };

        ws.onclose = () => {
          console.log('WebSocket connection closed');
          setConnectionStatus('disconnected');
          if (retryCount < maxRetries) {
            connectWebSocket();
          } else {
            setConnectionStatus('error');
          }
        };
      }, delay);
    };

    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [tickerSymbol]);

  return (
    <div>
      {/* Optionally add input to modify tickerSymbol */}
      {connectionStatus === 'connecting' && <p>Connecting...</p>}
      {connectionStatus === 'disconnected' && (
        <p style={{ color: 'red' }}>Disconnected. Retrying...</p>
      )}
      {connectionStatus === 'error' && (
        <p style={{ color: 'red' }}>
          Error: Failed to connect after multiple retries.
        </p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <LineChart width={800} height={400} data={chartData}>
        {/* Customize axes as needed */}
        <Line />
      </LineChart>
    </div>
  );
};

export default WebSocketLineChart;
