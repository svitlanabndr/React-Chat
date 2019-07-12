import React from 'react';
import Message from './Message.js';

export default class MessageList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isValid: true
    //     };
    // }

    render() {
        
        const messages = this.props.data.map((message) =>
            <Message message = {message} />
        );

        return (
            <div className='message-list'>
                { messages }
            </div>
        );
    }
}