import './button.css'

export const Button = ({showAfter, handleClick}) => {
    return(
        <button className={`btn-flip ${showAfter ? 'show-after' : ''}`} data-back="Translated" data-front="Translate" onClick={handleClick}/>
    )
}

