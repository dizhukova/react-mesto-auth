import React from 'react';
import avatarImage from '../images/avatar.jpg';

function Main() {

    function handleEditAvatarClick() {
        const editPopup = document.querySelector('.popup_type_edit-avatar');
        editPopup.classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        const editPopup = document.querySelector('.popup_type_edit-profile');
        editPopup.classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        const editPopup = document.querySelector('.popup_type_add-card');
        editPopup.classList.add('popup_opened');
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-box">
                        <img className="profile__avatar" src={avatarImage} alt="Аватар профиля" />
                        <button className="profile__avatar-edit" type="button" aria-label="Редактировать" onClick={handleEditAvatarClick}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-box">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
                        </div>
                        <p className="profile__profession">Исследователь океана</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="photos">
                <ul className="cards"></ul>
            </section>
        </main>
    )
}

export default Main;