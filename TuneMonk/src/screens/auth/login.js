import React from 'react';
import { loginEndpoint } from '../../spotify';

import './login.css';

export default function Login() {
    return (
        <div className="login-page">
        <img src = '/start.png'
        alt = 'logo-spotify' className = 'logo' />
        <a href={loginEndpoint}>
            <div className = "login-btn"> Login </div>
        </a>
    </div>
  );
}
