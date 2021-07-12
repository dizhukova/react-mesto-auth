import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input className="popup__input popup__input_type_name" minLength="2" maxLength="40" type="text" id="name-input" name="name" placeholder="Имя" value={name} onChange={handleNameChange} />
            <span className="popup__input-error name-input-error"></span>
            <input className="popup__input popup__input_type_profession" minLength="2" maxLength="200" type="text" id="profession-input" name="profession" placeholder="Вид деятельности" value={description} onChange={handleDescriptionChange} />
            <span className="popup__input-error profession-input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;