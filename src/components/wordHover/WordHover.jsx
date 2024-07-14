import React, { useState, useEffect } from 'react';
import './wordHover.css';
import { getDictionary } from '../../handlers/getDictionary';

export const WordHover = ({ word }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [result, setResult] = useState('no res')

  useEffect(() => {
    (async function() {
      const response = await getDictionary(word)
      try {
        setResult(response.data[0].phonetic)
      } catch (error) {
          setResult('no result')
      } 
    })()
  }, [word])

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (showTooltip) {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
      }
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [showTooltip])

  const handleMouseOver = () => setShowTooltip(true) 
  const handleMouseOut = () => setShowTooltip(false)

  return (
    <div className='word_container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {word}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            backgroundColor: 'white',
            border: '1px solid #ddd',
            padding: '5px',
            borderRadius: '5px',
            zIndex: '99'
          }}
        >
            <p className=''>
                {
                  result || 'no result'
                }
            </p>
        </div>
      )}
    </div>
  );
};
