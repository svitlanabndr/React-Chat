import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions';

const Submit = ({passwordValue, loginValue, loginUser}) => {
    return (
        <button onClick = {() => loginUser(passwordValue, loginValue)} > Sign In </button>
    );
}

function mapStateToProps(state) {
    return { 
        passwordValue: state.login.passwordValue,
        loginValue: state.login.loginValue
    };
}

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit)
