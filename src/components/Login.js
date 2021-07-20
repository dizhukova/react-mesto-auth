import React from 'react';
import RegistrationForm from './RegistrationForm';

function Login(props) {
    return (
        <RegistrationForm name="login" title="Вход" buttonText="Войти">
            <input className="registration__input" type="email" name="email" placeholder="E-mail" required />
            {/* { && <span className="popup__input-error">{}</span>} */}
            <input className="registration__input" type="password" name="password" placeholder="Пароль" required />
            {/* { && <span className="popup__input-error">{}</span>} */}
        </RegistrationForm>
    )
}

export default Login;