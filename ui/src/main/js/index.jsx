import "../css/main.css"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
        domain="dev-2taep7x6uivvo7zb.eu.auth0.com"
        clientId="apwERGXcHpdVt0N2DIZswBhMuqFeVHJq"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
        >
            <App/>
    </Auth0Provider>,
    document.getElementById("app")
);