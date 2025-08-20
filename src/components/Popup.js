import React, { useState, useEffect } from 'react';
import '../styles/popup.css'; // Create this CSS file

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Dear Patients and Friends, we would like to inform you that Dr Watson Dental Clinic is <strong>permanently closed</strong>. We DO NOT accept appointments and see patients. <br></br><br></br>

            From the bottom of our hearts we thank you for trusting us your health and smiles during all these years of daily work. <br></br><br></br>
            
            With love, Dr Watson Dental Clinic's team.<br></br><br></br>

            ❤️🇿🇲</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;