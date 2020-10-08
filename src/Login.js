import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(result=> {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
            
        })
        .catch((error)=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="data:image/png;base64,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"
                    alt=""
                />
                <img 
                    src="data:image/png;base64,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"
                    alt=""
                />
                <Button type="submit" onClick={signIn}>
                    SignIn
                </Button>
            </div>
        </div>
    )
}

export default Login;