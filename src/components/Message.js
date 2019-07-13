import React from 'react';
import './Message.css';
import { ReactComponent as LikeLogo } from './like.svg';
import { ReactComponent as EditLogo } from './edit.svg';

export default class Message extends React.Component {
    render() {
        const message = this.props.message;
        if (message.is_mine)  //
            return (
                <div className="outgoing_msg">
                    <div className="sent_msg">
                        <p>{ message.message }</p>
                        <span className="time_date">{ message.created_at }</span> 
                        < EditLogo />
                    </div>
                </div>
            );
        return (
            <div className = 'incoming_msg'>
                <div className = 'incoming_msg_img'><img src = { message.avatar.toString() } /></div>
                <div className = 'received_msg'>
                    <div className = 'received_withd_msg'>
                        <p>{ message.message }</p>
                        <span className = 'time_date'>{ message.created_at }</span>
                        < LikeLogo />
                    </div>
                </div>
            </div>
        );
    }
}