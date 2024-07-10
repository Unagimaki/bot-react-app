import './button.css'

export const Button = ({handleClick}) => {
    return(
        <button>
            <a onClick={() => handleClick()} class="btn-flip" data-back="Translated" data-front="Translate"></a>
        </button>
    )
}

