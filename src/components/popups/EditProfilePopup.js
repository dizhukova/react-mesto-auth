import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup(props) {
    return (
        <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText ="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
            <input className="popup__input popup__input_type_name" minLength="2" maxLength="40" type="text" id="name-input" name="name" placeholder="Имя" required />
            <span className="popup__input-error name-input-error"></span>
            <input className="popup__input popup__input_type_profession" minLength="2" maxLength="200" type="text" id="profession-input" name="profession" placeholder="Вид деятельности" required />
            <span className="popup__input-error profession-input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;