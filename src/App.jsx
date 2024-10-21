import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [suggestedText,setSuggestedText]=useState("");;
  const [inputText,setInputtext]=useState("");
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputtext(text)
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
  
    if(firstCorrection)
    {
      setSuggestedText(firstCorrection)
    }
    else{
      setSuggestedText("")
    }
  };
  return (
    <div className="App">
      <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
