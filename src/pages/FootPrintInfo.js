import React, { useEffect, useState } from 'react';
import { getFootPrintWarnings } from '../services/CalculationService';
import showToast from '../utils/showToast';
import '../css/footPrintInfo.css';

export default function FootPrintInfo() {
  const [footPrintMessages, setFootPrintMessages] = useState([]);

  useEffect(() => {
    fetchFootPrintWarnings();
  }, []);

  const fetchFootPrintWarnings = async () => {
    try {
      const response = await getFootPrintWarnings();
      const messages = response.data.messages;
      console.log(messages);
      setFootPrintMessages(messages);
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  return (
    <div>
      <h2 className='foot-print-title'>Footprint Warnings</h2>
      {footPrintMessages.map((message, index) => (
        <div key={index}>
          <p className='foot-print-message'>
            <span
              style={{
                color: message.isSuccess ? 'green' : 'red',
                display: 'block',
              }}
            >
              {message.message}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
