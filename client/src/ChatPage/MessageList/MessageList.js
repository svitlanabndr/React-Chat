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
        const messageListItems = this.props.data.map((message, i) => {
            if (message.break_date) {
                return <p className = 'break-line' key = { i }>{ message.break_date }</p>
            } else {
                return message.user === this.props.currentUser.id ? 
                    <OutgoingMessage message = { message } key = { message.id }/> : 
                    <IncomingMessage message = { message } key = { message.id }/>
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
        data: makeMessageListProps(state.chat.messageList),
        currentUser: state.loading.currentUser
    }
}

export default connect(mapStateToProps)(MessageList);
