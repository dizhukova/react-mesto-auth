import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js'

function App() {
  return (
  <div className="page">
    <Header />
    <Main />
    <Footer />
    
    <article className="popup popup_type_edit-profile">
      <div className="popup__container">
        <h3 className="popup__title">Редактировать профиль</h3>
        <button className="popup__close-button" type="button" aria-label="Закрыть" id="edit_close-button"></button>
        <form className="popup__form" name="EditProfile" novalidate>
          <fieldset className="popup__form-field">
            <input className="popup__input popup__input_type_name" minlength="2" maxlength="40" type="text" id="name-input" name="name" placeholder="Имя" required />
            <span className="popup__input-error name-input-error"></span>
            <input className="popup__input popup__input_type_profession" minlength="2" maxlength="200" type="text" id="profession-input" name="profession" placeholder="Вид деятельности" required />
            <span className="popup__input-error profession-input-error"></span>
            <button className="popup__submit-button" type="submit" name='submit' aria-label="Сохранить">Сохранить
              <span className="loader-dots">
                <span className="loader-dots__dot dot-pulse">.</span>
                <span className="loader-dots__dot dot-pulse">.</span>
                <span className="loader-dots__dot dot-pulse">.</span>
              </span>
            </button>
          </fieldset> 
        </form> 
      </div>
    </article>

    <article className="popup popup_type_edit-avatar">
      <div className="popup__container">
        <h3 className="popup__title">Обновить аватар</h3>
        <button className="popup__close-button" type="button" aria-label="Закрыть" id="avatar_close-button"></button>
        <form className="popup__form" name="EditAvatar" novalidate>
          <fieldset className="popup__form-field">
            <input className="popup__input popup__input_type_avatar-link" type="url" id="avatar-input" name="avatar-link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error avatar-input-error"></span>
            <button className="popup__submit-button" type="submit" name='submit' aria-label="Сохранить">Сохранить
              <span className="loader-dots">
                <span className="loader-dots__dot dot-pulse">.</span>
                <span className="loader-dots__dot dot-pulse">.</span>
                <span className="loader-dots__dot dot-pulse">.</span>
              </span>
            </button>
          </fieldset>
        </form>
      </div>
    </article>

    <article className="popup popup_type_add-card">
      <div className="popup__container">
        <h3 className="popup__title">Новое место</h3>
        <button className="popup__close-button" type="button" aria-label="Закрыть" id="add_close-button"></button>
        <form className="popup__form" name="AddCard" novalidate>
          <fieldset className="popup__form-field">
            <input className="popup__input popup__input_card_title" minlength="2" maxlength="30" type="text" id="title-input" name="card-name" placeholder="Название" required />
            <span className="popup__input-error title-input-error"></span>
            <input className="popup__input popup__input_card_link" type="url" id="link-input" name="card-link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-input-error"></span>
            <button className="popup__submit-button" type="submit" name='submit' aria-label="Создать">Создать
              <span className="loader-dots">
                <span className="loader-dots__dot dot-pulse">.</span>
                <span className="loader-dots__dot dot-pulse">.</span>
                <span className="loader-dots__dot dot-pulse">.</span>
              </span>
            </button>
          </fieldset>
        </form> 
      </div>
    </article>

    <article className="popup popup_type_open-image">
      <div className="popup__container popup__container_open_image">
        <button className="popup__close-button" type="button" aria-label="Закрыть" id="image_close-button"></button>
        <figure className="popup__image-box">
          <img className="popup__image" src="#" alt="Фото"/>
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </article>

    <article className="popup popup_type_delete-card">
      <div className="popup__container popup__container_delete-card">
        <h3 className="popup__title">Вы уверены?</h3>
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <form className="popup__form" name="DeleteCard">
          <fieldset className="popup__form-field">
            <button className="popup__submit-button" type="submit" name='submit' aria-label="Да" id="card_delete-button">Да</button>
          </fieldset>
        </form>
      </div>
    </article>

    <template className="card-template">
      <li className="card">
        <img className="card__image" src="#" alt="Фото" />
        <button className="card__delete-button" type="button" aria-label="Удалить"></button>
        <div className="card__caption">
          <h2 className="card__name"></h2>
          <div className="card__like-box">
            <button className="card__like-button" type="button" aria-label="Нравится"></button>
            <p className="card__like-number"></p>
          </div>
        </div>
      </li>
    </template>
  </div>
  );
}

export default App;
