import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function PopupEditAvatar() {
    return (
        <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить">
            <input className="popup__input popup__input_type_avatar-link" type="url" id="avatar-input" name="avatar-link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
    )
}

export default PopupEditAvatar;