import './App.css';
import React, { useState, useEffect } from 'react';
import { createTranslate } from './handlers/createTranslate';
import { Button } from './components/Button/Button';

function App() {
  const [translatedText, setTranslatedText] = useState('');
  const [originalText, setoriginalText] = useState('');
  const [showTranslate, setShowTranslate] = useState(false)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const text = urlParams.get('text');

    if (text) {
      setoriginalText(text)
      setLoading(true);
      createTranslate(text)
        .then((result) => {
          setTranslatedText(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, []);
  const handleClick = () => {
    setShowTranslate(!showTranslate);
  };

  return (
    <div>
      <p>Original: {originalText || 'no text'}</p>
      <br/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Button handleClick={handleClick}/>
      )}
      <br/>
      {showTranslate &&
        <div>
          {translatedText}
        </div>
      }
    </div>
  );
}

export default App;