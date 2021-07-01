import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
import EditAvatarPopup from './popups/EditAvatarPopup.js';
import EditProfilePopup from './popups/EditProfilePopup.js';
import AddPlacePopup from './popups/AddPlacePopup.js';
import ImagePopup from './popups/ImagePopup.js';
import DeleteCardPopup from './popups/DeleteCardPopup.js';


function App() {
  document.documentElement.lang = 'ru';
  document.title = 'Mesto';

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
      <Footer />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <ImagePopup />
      <DeleteCardPopup />

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
