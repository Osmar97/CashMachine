import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ setAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isRegister ? '/api/users/register' : '/api/users/login';

        try {
            const res = await axios.post(url, { username, password });
            localStorage.setItem('token', res.data.token);
            setAuth(true);
        } catch (err) {
        console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            <button type="button" onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </form>
    );
};

export default Auth;
