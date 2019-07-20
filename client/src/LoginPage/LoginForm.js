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
        let error;
        if (this.props.error) error = <div className='error-login'>Error: { this.props.error.message }. Try again. </div>
        
        return (
            <div className='login-form'>
                <Login/>
                <Password/>
                { error }
                <Submit/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        ...state.loading,
        error: state.login.error        
    };
}

export default connect(mapStateToProps)(LoginForm);
