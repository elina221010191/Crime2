import React, { useState } from 'react';
import "../Styles/about.css";

const CrimeTypes = () => {
  const [selectedCrime, setSelectedCrime] = useState(null);

  const crimeTypes = [
    {
      id: 1,
      name: "Violent Crime",
      description: "Crimes that involve force or threat of force against victims, including assault, robbery, and homicide.",
      examples: ["Assault", "Murder", "Robbery", "Rape"]
    },
    {
      id: 2,
      name: "Property Crime",
      description: "Crimes that involve theft or destruction of someone's personal property.",
      examples: ["Burglary", "Theft", "Vandalism", "Arson"]
    },
    {
      id: 3,
      name: "Cybercrime",
      description: "Criminal activities carried out using computers or the internet.",
      examples: ["Identity Theft", "Phishing", "Hacking", "Online Fraud"]
    },
    {
      id: 4,
      name: "Psychological Crime",
      description: "Non-violent crimes committed for financial gain, typically by business or government professionals.",
      examples: ["Embezzlement", "Fraud", "Money Laundering", "Insider Trading"]
    }
  ];

  const handleCrimeSelect = (crime) => {
    setSelectedCrime(crime);
  };

  return (
    <div className="crime-types-container">
      <h1 className="crime-types-title">Types of Crime</h1>
      
      <div className="crime-types-title">
        {/* Crime Type Buttons */}
        <div className="crime-type-btn">
          {crimeTypes.map((crime) => (
            <button
              key={crime.id}
              onClick={() => handleCrimeSelect(crime)}
              className={`w-full p-4 text-left rounded-lg transition-all duration-300 ${
                selectedCrime?.id === crime.id 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 hover:bg-blue-100"
              }`}
            >
              {crime.name}
            </button>
          ))}
        </div>

        {/* Crime Details */}
        <div className="crime-details-container">
          {selectedCrime ? (
            <div>
              <h2 className="crime-details-title">{selectedCrime.name}</h2>
              <p className="crime-details-description">{selectedCrime.description}</p>
              
              <h3 className="crime-examples-title">Examples:</h3>
              <ul className="crime-examples-list">
                {selectedCrime.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              Select a crime type to view details
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrimeTypes;