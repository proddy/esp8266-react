import React from 'react';

function LanguageSelector({ language, onChangeLanguage }) {
    function handleChange(event) {
        event.preventDefault();
        onChangeLanguage(event.target.value);
    }
    return (
        <div className="select">
            <select onChange={handleChange} value={language}>
                <option value="en">English</option>
                <option value="fr">German</option>
                <option value="nl">Dutch</option>
            </select>
        </div>
    );
}

export default LanguageSelector;