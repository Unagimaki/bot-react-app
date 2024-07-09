import './App.css';
import React, { useState, useEffect } from 'react';
import { createTranslate } from './handlers/createTranslate';

function App() {
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const text = urlParams.get('text');

    if (text) {
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

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Translated text: {translatedText}</p>
      )}
    </div>
  );
}

export default App;