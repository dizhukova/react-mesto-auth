import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupEditAvatar from './popups/PopupEditAvatar.js';
import PopupEditProfile from './popups/PopupEditProfile.js';
import PopupAddCard from './popups/PopupAddCard.js';
import ImagePopup from './popups/ImagePopup.js';
import PopupDeleteCard from './popups/PopupDeleteCard.js';


function App() {
  document.documentElement.lang = 'ru';
  document.title = 'Mesto';

  const [isPopupEditAvatarOpen, setIsPopupEditAvatarOpen] = React.useState(false);
  const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
  const [isPopupAddCardOpen, setPopupAddCardOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsPopupEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setIsPopupEditProfileOpen(true);
  }

  function handleAddCardClick() {
    setPopupAddCardOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddCard={handleAddCardClick}/>
      <Footer />

      <PopupEditAvatar isOpen={isPopupEditAvatarOpen}/>
      <PopupEditProfile isOpen={isPopupEditProfileOpen}/>
      <PopupAddCard isOpen={isPopupAddCardOpen}/>
      <ImagePopup />
      <PopupDeleteCard />

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
