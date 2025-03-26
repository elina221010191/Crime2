import React, { useState } from 'react';
import "../Styles/about.css";
const CrimeTypes = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const crimeCategories = [
    {
      name: "Violent Crimes",
      examples: ["Assault", "Battery", "Homicide", "Robbery", "Kidnapping"]
    },
    {
      name: "Property Crimes",
      examples: ["Burglary", "Theft", "Arson", "Vandalism", "Shoplifting"]
    },
    {
      name: "White-Collar Crimes",
      examples: ["Fraud", "Embezzlement", "Money Laundering", "Tax Evasion", "Identity Theft"]
    },
    {
      name: "Drug Crimes",
      examples: ["Possession", "Distribution", "Manufacturing", "Trafficking"]
    },
    {
      name: "Cyber Crimes",
      examples: ["Hacking", "Phishing", "Ransomware Attacks", "Online Harassment", "Digital Piracy"]
    }
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Types of Crimes</h1>
      <div className="space-y-3">
        {crimeCategories.map((category, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button 
              onClick={() => toggleCategory(index)}
              className="w-full p-3 text-left font-medium bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
            >
              {category.name}
              <span className="text-gray-600">
                {expandedCategory === index ? '−' : '+'}
              </span>
            </button>
            {expandedCategory === index && (
              <ul className="p-3 bg-gray-50">
                {category.examples.map((crime, crimeIndex) => (
                  <li key={crimeIndex} className="py-1">{crime}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        This is a simplified categorization of crimes for educational purposes.
      </p>
    </div>
  );
};

export default CrimeTypes;