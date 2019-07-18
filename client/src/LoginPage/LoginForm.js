import React from 'react';
import Login from './Login';
import Password from './Password';
import Submit from './Submit';
import { connect } from 'react-redux';
import './LoginForm.css';

class LoginForm extends React.Component {
    render() {
        if (this.props.response) {
            if (this.props.response.admin) this.props.history.push('/users');
            if (this.props.response.user) this.props.history.push('/chat');
        }
        
        return (
            <div className='login-form'>
                <Login/>
                <Password/>
                <Submit/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { ...state.loading };
}

export default connect(mapStateToProps)(LoginForm);
