import { useState, useEffect } from 'react';

const useWebSocket = (url) => {
  const [data, setData] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  
  useEffect(() => {
    const socket = new WebSocket(url);
    
    socket.onopen = () => setConnectionStatus('Connected');
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setData(message);
    };
    socket.onclose = () => setConnectionStatus('Disconnected');
    
    return () => socket.close(); // Cleanup on unmount
  }, [url]);

  return { data, connectionStatus };
};

export default useWebSocket;