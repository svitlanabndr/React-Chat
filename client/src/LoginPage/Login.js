import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateLoginValue } from './actions';

const Login = ({ loginValue, updateLoginValue }) => {
    return (
        <div>
            <label> Your login: </label>
            <input
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
