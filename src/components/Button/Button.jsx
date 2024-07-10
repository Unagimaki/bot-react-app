import './button.css'

export const Button = ({handleClick}) => {
    return(
        <button onClick={() => handleClick()} className="btn-flip" data-back="Translated" data-front="Translate">
        </button>
    )
}

