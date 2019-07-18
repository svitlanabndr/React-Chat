import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePasswordValue } from './actions';

const Password = ({ passwordValue, updatePasswordValue }) => {
    const [isShown, setIsShown] = useState(false);
    const inputType = isShown ? 'text' : 'password';

    return (
        <div className='form-group'>
            <label> Your password: </label>
            <input
                className='password'
                type={ inputType }
                value={passwordValue} 
                onChange={ (evt) => updatePasswordValue(evt.target.value) }
            />
            <button onClick={() => setIsShown(!isShown) }>&#x1f441;</button>
        </div>
    );
}

Password.propTypes = {
	passwordValue: PropTypes.string
};

function mapStateToProps(state) {
    return { passwordValue: state.login.passwordValue };
}

const mapDispatchToProps = {
    updatePasswordValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Password)