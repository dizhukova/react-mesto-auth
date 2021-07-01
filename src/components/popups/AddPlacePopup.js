import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
    return (
        <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={props.isOpen} onClose={props.onClose}>
            <input className="popup__input popup__input_card_title" minLength="2" maxLength="30" type="text" id="title-input" name="card-name" placeholder="Название" required />
            <span className="popup__input-error title-input-error"></span>
            <input className="popup__input popup__input_card_link" type="url" id="link-input" name="card-link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;