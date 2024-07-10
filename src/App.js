import './App.css';
import React, { useState, useEffect } from 'react';
import { createTranslate } from './handlers/createTranslate';
import { Button } from './components/Button/Button';
import { Select } from './components/Select/Select';

function App() {
  const [translatedText, setTranslatedText] = useState('');
  const [originalText, setoriginalText] = useState('');
  const [showTranslate, setShowTranslate] = useState(false)
  const [loading, setLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const text = urlParams.get('text');
    // const text = 'Hello'

    if (text) {
      setoriginalText(text)
      setLoading(true);
      createTranslate(text, selectedLanguage)
        .then((result) => {
          setTranslatedText(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [selectedLanguage]);
  const handleClick = () => {
    setShowTranslate(!showTranslate);
  }
  const handleLanguageChange = (language) => {
    setLoading(true)
    setSelectedLanguage(language)
  }

  return (
    <div>
      <p>Original: {originalText || 'no text'}</p>
      <br/>
        <Button handleClick={handleClick}/>
      <br/>
      {showTranslate &&
        <div>
          {loading ? 'loading' : translatedText}
        </div>
      }
      <Select onLanguageChange={handleLanguageChange}/>
    </div>
  );
}

export default App;