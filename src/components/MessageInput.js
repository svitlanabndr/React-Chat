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

    updateInputValue = (evt) => {
        this.setState({
          inputValue: evt.target.value
        });
      }
    
        
    render() {
        return (
            <div className="type_msg">
                <div className="input_msg_write">
                <input type="text" className="write_msg" 
                    value={this.state.inputValue} 
                    onChange={this.updateInputValue}  
                    placeholder="Type a message"
                 />
                <button class="msg_send_btn" type="button" onClick = { this.props.sendMessage(this.state.inputValue) }><LogoPlane /></button>
                </div>
            </div>
        );
    }
}