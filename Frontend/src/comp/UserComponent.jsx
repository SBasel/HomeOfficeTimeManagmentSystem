import  { useState } from 'react';
import axios from 'axios';
import OverviewComponent from './OverviewComponent';

const UserComponent = () => {
  const [message, setMessage] = useState('');
  const [showOverview, setShowOverview] = useState(false);

  const handleStartClick = async () => {
    try {
      const response = await axios.post('http://localhost:3000/start', {}, {
        withCredentials: true
      });
      setMessage(response.data.message); 
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Fehler beim Starten');
    }
  };

  const handleStopClick = async () => {
    try {
      const response = await axios.post('http://localhost:3000/end', {}, {
        withCredentials: true
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Fehler beim Stoppen');
    }
  };

  const handleOverviewClick = () => {
    setShowOverview(true);
  };


   return (
    <div>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
      <button onClick={handleOverviewClick}>Übersicht</button>
      {message && <p>{message}</p>}
      
      {showOverview && <OverviewComponent />} {/* Conditionally render OverviewComponent */}
    </div>
  );
};

export default UserComponent;



