import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Header (props) {
    return <div className = 'header'>
        <span className = 'title'>React Chat</span>
        <span className = 'participants'>{props.usersAmount} participants</span>
        <span className = 'messages'>{props.messagesAmount} messages</span>
        <span className = 'date'>last message at {props.lastMessageTime}</span>
    </div>
}

Header.propTypes = {
	data: PropTypes.shape({
        usersAmount: PropTypes.number,
        messagesAmount: PropTypes.number,
        lastMessageTime: PropTypes.string
    }),
};

function mapStateToProps(state) {
    const { messageList } = state.chat;
    const usersAmount = messageList.reduce((set, next) => set.add(next.user), new Set()).size;
    const messagesAmount = messageList.length;
    const lastMessageTime = messageList[messageList.length - 1].created_at;
    return { usersAmount, messagesAmount, lastMessageTime }
}

export default connect(mapStateToProps)(Header);
