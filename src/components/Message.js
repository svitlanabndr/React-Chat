import React from 'react';
import './Message.css';
import { ReactComponent as Logo } from './like.svg';

export default class Message extends React.Component {
    render() {
        const message = this.props.message;
        return (
            <div className = 'incoming_msg'>
                <div className = 'incoming_msg_img'><img src = { message.avatar.toString() } /></div>
                <div className = 'received_msg'>
                    <div className = 'received_withd_msg'>
                        <p>{ message.message }</p>
                        <span className = 'time_date'>{ message.created_at }</span>
                        <Logo />
                    </div>
                </div>
            </div>
        );
    }
}