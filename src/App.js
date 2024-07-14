import './App.css';
import React, { useEffect, useState } from 'react';
import { getTranslate } from './handlers/getTranslate';
import { Button } from './components/Button/Button';
import { Select } from './components/Select/Select';
import { WordHover } from './components/wordHover/WordHover';

function App() {

  const [state, setState] = useState({
    translatedText: '',
    originalText: 'hello world from Michael',
    loading: false,
    selectedLanguage: 'ru',
    showAfter: false
  })
  const words = state.originalText.split(' ')
  
  useEffect(() => {
    const url = new URL(window.location.href);
    const text = url.searchParams.get('text');
    setState({...state, originalText: text})
  }, [])

  const startTranslate = () => {
    setState({...state, loading: true})
    getTranslate(state.originalText, state.selectedLanguage)
     .then(result => setState({...state, translatedText: result, loading: false, showAfter: true}))
     .catch(error => console.error(error))
  }
  useEffect(() => {
    startTranslate()
  }, [state.selectedLanguage])


  return (
    <div className='container'>
      <div className='original_text'>
      {
        words.map((word, index) => (
          <WordHover key={index} word={word} />
        ))
      }
      </div>
      <Button showAfter={state.showAfter} handleClick={() => startTranslate()} />
      <div className='translatedText'>
        {state.loading ? 'loading' : state.translatedText}
      </div>
      <Select
        onLanguageChange={lan => setState({...state, selectedLanguage: lan})}
      />
      

    </div>
  );
}

export default App;