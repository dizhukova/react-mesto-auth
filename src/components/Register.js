import React from 'react';
import RegistrationForm from './RegistrationForm';

function Register(props) {
    return (
        <RegistrationForm name="register" title="Регистрация" buttonText="Зарегистироваться">
            <input className="registration__input" type="email" name="email" placeholder="E-mail" required />
            {/* { && <span className="popup__input-error">{}</span>} */}
            <input className="registration__input" minLength="6" type="password" name="password" placeholder="Пароль" required />
            {/* { && <span className="popup__input-error">{}</span>} */}
        </RegistrationForm>
    )
}

export default Register;