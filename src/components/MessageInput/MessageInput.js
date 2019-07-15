import React from 'react';
import './MessageInput.css';
import { ReactComponent as LogoPlane } from './send.svg';
import PropTypes from 'prop-types';
import { updateInput, addMessage } from '../Chat/actions';
import { connect } from 'react-redux';


class MessageInput extends React.Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextState ===  this.state) return false;
    //     return true;
    // }
   
    render() {
        return (
            <div className="type_msg">
                <div className="input_msg_write">
                <input type="text"
                    value={this.props.inputValue} 
                    onChange={ (evt) => this.props.updateInput(evt.target.value) }  
                    placeholder="Type a message"
                 />
                <button className="msg_send_btn" type="button" onClick = { this.props.addMessage }><LogoPlane /></button>
                </div>
            </div>
        );
    }
}

MessageInput.propTypes = {
	sendMessage: PropTypes.func
};

function mapStateToProps(state) {
    return { inputValue: state.chat.inputValue };
}

const mapDispatchToProps = {
    addMessage,
    updateInput
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput)