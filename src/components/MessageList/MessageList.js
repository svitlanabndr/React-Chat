import React from 'react';
import OutgoingMessage from '../OutgoingMessage/OutgoingMessage.js';
import IncomingMessage from '../IncomingMessage/IncomingMessage.js';
import './MessageList.css';
import PropTypes from 'prop-types';
import { makeMessageListProps } from './service';
import { connect } from 'react-redux';

class MessageList extends React.Component {
    shouldComponentUpdate(nextProps) {
        return JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data);
    }

    render() {
        const messageListItems = this.props.data.map((message) => {
            if (message.break_date) {
                return <p className = 'break-line'>{ message.break_date }</p>
            } else {
                return message.is_mine ? 
                    <OutgoingMessage message = {message} /> : 
                    <IncomingMessage message = {message} />
            }
        });

        return (
            <div className='message-list'>
                { messageListItems }
            </div>
        );
    }
}

MessageList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
    return {
        data: makeMessageListProps(state.chat.messageList)
    }
}

export default connect(mapStateToProps)(MessageList);
