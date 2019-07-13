import React from 'react';
import './MessageInput.css';
import { ReactComponent as LogoPlane } from './send.svg';

export default class MessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState ===  this.state) return false;
        return true;
    }

    updateInputValue = evt => {
        this.setState({
          inputValue: evt.target.value
        });
    }

    sendMessage = () => {
        this.props.sendMessage(this.state.inputValue);
        this.setState({
            inputValue: ''
          });
    }
   
    render() {
        return (
            <div className="type_msg">
                <div className="input_msg_write">
                <input type="text"
                    value={this.state.inputValue} 
                    onChange={this.updateInputValue}  
                    placeholder="Type a message"
                 />
                <button className="msg_send_btn" type="button" onClick = { this.sendMessage }><LogoPlane /></button>
                </div>
            </div>
        );
    }
}