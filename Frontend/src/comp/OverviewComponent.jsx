import  { useState, useEffect } from 'react';
import axios from 'axios';

const OverviewComponent = () => {
  const [timestamps, setTimestamps] = useState([]);
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'http://localhost:3000/get/';
        if (selectedDate) {
          url += `?date=${selectedDate}`;
        }

        const response = await axios.get(url, {
          withCredentials: true
        });
        setTimestamps(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Fehler beim Abrufen der Daten');
        console.log(err);
      }
    };

    fetchData();
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <h2>Übersicht</h2>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {timestamps.map((timestamp, index) => (
            <li key={index}>
              <strong>Start:</strong> {new Date(timestamp.start_timestamp).toLocaleString()}<br />
              <strong>End:</strong> {new Date(timestamp.end_timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OverviewComponent;
