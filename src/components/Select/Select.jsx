import './select.css';

export const Select = ({onLanguageChange, setNewLanguage}) => {
    const handleLanguageChange = (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex]
        const datatype = selectedOption.getAttribute('datatype')
        console.log(datatype);
        onLanguageChange(datatype)
        setNewLanguage()
    }
    return(
        <div>
            <h2 className='select-title'>Select language:</h2>

            <div className="styled-select">
                <select onChange={handleLanguageChange}>
                    <option datatype='ru'>Русский</option>
                    <option datatype='en'>English</option>
                    <option datatype='de'>Deutsch</option>
                    <option datatype='fr'>Français</option>
                </select>
                <span className="fa fa-sort-desc"></span>
            </div>
        </div>
    )
}