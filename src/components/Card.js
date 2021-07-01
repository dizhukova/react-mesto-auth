import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="card">
            <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <button className="card__delete-button" type="button" aria-label="Удалить"></button>
            <div className="card__caption">
                <h2 className="card__name">{props.card.name}</h2>
                <div className="card__like-box">
                    <button className="card__like-button" type="button" aria-label="Нравится"></button>
                    <p className="card__like-number">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;