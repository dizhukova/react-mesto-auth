import React from 'react';
import api from './utils/Api.js';
import Card from './Card.js';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    Promise.all([
        api.getUserInfo(),
        api.getInitialCards()
    ])
        .then(([userData, cards]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(cards);
        })
        .catch(err => console.log(err));


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-box">
                        <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
                        <button className="profile__avatar-edit" type="button" aria-label="Редактировать" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-box">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__profession">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="photos">
                <ul className="cards">
                    {cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main;