import React from 'react';
import './Message.css';
import { ReactComponent as UnlikeLogo } from './unlike.svg';
import { ReactComponent as LikeLogo } from './like.svg';
import { ReactComponent as EditLogo } from './edit.svg';
import { ReactComponent as DeleteLogo } from './delete.svg';

export default class Message extends React.Component {
    openEdit = () => this.props.message.openModal(this.props.message.id);
    delete = () => this.props.message.deleteMessage(this.props.message.id);
    like = () => this.props.message.likeMessage(this.props.message.id);

    render() {
        const message = this.props.message;
        if (message.is_mine) 
            return (
                <div className="outgoing_msg">
                    <div className="sent_msg">
                        <p>{ message.message }</p>
                        <span className="time_date">{ message.created_at }</span> 
                        <button type="button" className='delete-btn' onClick={this.delete}>< DeleteLogo /></button>      
                        <button type="button" className='edit-btn' onClick={this.openEdit}>< EditLogo /></button>
                    </div>
                </div>
            );
        const logo = message.is_liked ? <LikeLogo/> : <UnlikeLogo />;

        return (
            <div className = 'incoming_msg'>
                <div className = 'incoming_msg_img'><img src = { message.avatar.toString() } /></div>
                <div className = 'received_msg'>
                    <div className = 'received_withd_msg'>
                        <p>{ message.message }</p>
                        <span className = 'time_date'>{ message.created_at }</span>
                        <button type="button" className='like-btn' onClick = { this.like }>
                            { logo }
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
