import React, { useState, useEffect } from 'react';
import './wordHover.css';
import { getDictionary } from '../../handlers/getDictionary';
import { Loader } from '../Loader/Loader';

export const WordHover = ({ word }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [result, setResult] = useState('no res')
  const [loading, setLoading] = useState('false')

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (showTooltip) {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showTooltip]);

  const handleMouseOver = async () => {
    setShowTooltip(true);
    try {
        setLoading(true)
        const response = await getDictionary(word)
        setResult((response.data[0].phonetic).slice(1, -1))
        setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log(error)
        setResult('no transcrition')
    }
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

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
          }}
        >
            <p>
                {
                    loading ? <Loader/> : result
                }
            </p>
        </div>
      )}
    </div>
  );
};
