import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/Api';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            props.setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(props.setCards((state) =>
            state.filter((c) => c._id !== card._id)
        ));
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-box">
                        <img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля" />
                        <button className="profile__avatar-edit" type="button" aria-label="Редактировать" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-box">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__profession">{currentUser.about}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="photos">
                <ul className="cards">
                    {props.cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main;