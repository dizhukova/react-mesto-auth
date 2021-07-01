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
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  } 

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
    <>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
      <Footer />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <DeleteCardPopup />
    </>
  );
}

export default App;
