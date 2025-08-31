import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Checkbox, Form, Input } from 'antd';
import type { FormProps } from 'antd';
import '../styles/Enter.css';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
}


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <div className="button-container">
                <button id="RegisterButton" onClick={() => loginWithRedirect()}>
                Enter
                </button>

            </div>



        </div>
    )
}

export default LoginButton;

