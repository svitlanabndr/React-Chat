import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(
            nextProps.usersAmount === this.props.usersAmount &&
            nextProps.messagesAmount === this.props.messagesAmount &&
            nextProps.lastMessageTime === this.props.lastMessageTime
            ) return false;
        return true;
    }

    render() {
        return <div className = 'header'>
            <span className = 'title'>React Chat</span>
            <span className = 'participants'>{this.props.usersAmount} participants</span>
            <span className = 'messages'>{this.props.messagesAmount} messages</span>
            <span className = 'date'>last message at {this.props.lastMessageTime}</span>
        </div>
    }
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
