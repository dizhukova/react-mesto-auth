import React from 'react';

function ImagePopup() {
    return (
        <article className="popup popup_type_open-image">
            <div className="popup__container popup__container_open-image">
                <button className="popup__close-button" type="button" aria-label="Закрыть" id="image_close-button"></button>
                <figure className="popup__image-box">
                    <img className="popup__image" src="#" alt="Фото" />
                    <figcaption className="popup__caption"></figcaption>
                </figure>
            </div>
        </article>
    )
}

export default ImagePopup;