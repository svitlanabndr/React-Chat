import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateLoginValue } from './actions';

const Login = ({ loginValue, updateLoginValue }) => {
    return (
        <div className='form-group'>
            <label> Your login: </label>
            <input
                className='login'
                type='text'
                value={loginValue} 
                onChange={ (evt) => updateLoginValue(evt.target.value) }
            />
        </div>
    );
}

Login.propTypes = {
	loginValue: PropTypes.string
};

function mapStateToProps(state) {
    return { loginValue: state.login.loginValue };
}

const mapDispatchToProps = {
    updateLoginValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
