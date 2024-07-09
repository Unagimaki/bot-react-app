import './App.css';
import React, { useState, useEffect } from 'react';
import { createTranslate } from './handlers/createTranslate';
import { Route, Routes } from 'react-router-dom';
import { Score } from './components/Score/score';

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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handleClick}>Show translate</button>
      )}
      <br/>
      {showTranslate &&
        <div>
          {translatedText}
        </div>
      }
      <Routes>
        <Route path='/score' element={<Score/>}/>
      </Routes>
    </div>
  );
}

export default App;