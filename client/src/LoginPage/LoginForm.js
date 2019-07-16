import React from 'react';
import Login from './Login';
import Password from './Password';
import Submit from './Submit';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <Login/>
                <Password/>
                <Submit/>
            </div>
        );
    }
}
