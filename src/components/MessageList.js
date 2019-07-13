import React from 'react';
import Message from './Message.js';
import './MessageList.css';

export default class MessageList extends React.Component {
    render() {
    console.log(this.props.data);

        const messageListItems = this.props.data.map((message) => {
            if (message.break_date) {
                return <p className = 'break-line'>-------{ message.break_date }-------</p>
            } else {
                return <Message message = {message} />
            }
        });

        return (
            <div className='message-list'>
                { messageListItems }
            </div>
        );
    }
}