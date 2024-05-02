import React, { useState } from 'react';

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [definitionValue, setDefinitionValue] = useState('');

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    const foundWord = dictionary.find(item => item.word.toLowerCase() === term);
    if (foundWord) {
      setDefinitionValue(foundWord.meaning);
    } else {
      setDefinitionValue("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for a word..." />
      <button onClick={handleSearch}>Search</button>
      <p>Definition:</p>
      <p>{definitionValue}</p>
    </div>
  );
};

export default XDictionary;
