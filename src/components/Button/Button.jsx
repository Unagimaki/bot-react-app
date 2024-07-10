import './button.css'

export const Button = ({handleClick}) => {
    return(
        <>
            <a onClick={() => handleClick()} href="#" class="btn-flip" data-back="Translated" data-front="Translate"></a>
        </>
    )
}

