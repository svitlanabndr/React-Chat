import React from 'react';
import Message from '../Message/Message.js';
import './MessageList.css';

export default class MessageList extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(JSON.stringify(nextProps.data) == JSON.stringify(this.props.data)) return false;
        return true;
    }
    render() {
        console.log('message list rendered');
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