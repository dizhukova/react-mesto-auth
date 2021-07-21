import React from 'react';
import RegistrationForm from './RegistrationForm';
import * as auth from '../utils/auth';

function Login(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        auth.authorize(email, password)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem('jwt', res.token);
                    auth.checkToken(res.token).then((res) => {
                        props.onLogin(res.data.email);
                    });
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <RegistrationForm name="login" title="Вход" buttonText="Войти" onSubmit={handleSubmit}>
            <input className="registration__input" value={email} type="email" name="email" placeholder="E-mail" onChange={handleEmailChange} required />
            <input className="registration__input" minLength="6" value={password} type="password" name="password" placeholder="Пароль" onChange={handlePasswordChange} required />
        </RegistrationForm>
    )
}

export default Login;