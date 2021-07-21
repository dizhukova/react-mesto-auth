import React from 'react';
import { useHistory } from "react-router-dom";
import RegistrationForm from './RegistrationForm';
import * as auth from '../utils/auth.js';

function Register(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        auth.register(email, password)
            .then((res) => {
                if (res) {
                    props.onRegistrationSuccess();
                    history.push('/sign-in');
                }
            })
            .catch(err => {
                props.onRegistrationError();
                console.log(err);
            });
    }

    return (
        <RegistrationForm name="register" title="Регистрация" buttonText="Зарегистироваться" onSubmit={handleSubmit}>
            <input className="registration__input" value={email} type="email" name="email" placeholder="E-mail" onChange={handleEmailChange} required />
            <input className="registration__input" minLength="6" value={password} type="password" name="password" placeholder="Пароль" onChange={handlePasswordChange} required />
        </RegistrationForm>
    )
}

export default Register;