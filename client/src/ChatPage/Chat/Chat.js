import React from 'react';
import Header from '../Header/Header.js';
import MessageList from '../MessageList/MessageList.js';
import MessageInput from '../MessageInput/MessageInput.js';
import Spinner from '../../Spinner/Spinner.js';
import { connect } from 'react-redux';
import * as actions from './actions';
import { checkUser, clearResponse } from '../../Loading/actions';
import { openModal, openModalArrow } from '../EditModal/actions';

class Chat extends React.Component {
    componentDidMount() {
        const jwt = localStorage.getItem('jwt');
        if (jwt)
            this.props.checkUser(jwt);
        else
            this.props.history.push('/login');
		this.props.fetchMessages();
    }

    toUserList = () => {
        this.props.history.push('/users');
    }

    onLogOut = () => {
        localStorage.clear();
        this.props.clearResponse();
        this.props.history.push('/')
    }
    
    render() {
        let btnUserList = <button className='unclickable'> User List </button>;
        let errorMessage;
        const { isFetching, error, isModalOpen, editId, messageList, currentUser } = this.props;
        if (!this.props.response || isFetching) return <Spinner />;
        if (error) return <div>Error: {error.message}</div>;
        if (this.props.chatError) errorMessage = <div className='chat-error'> Chat error: { this.props.chatError.message }. Try again. </div>
        if (this.props.editError) errorMessage = <div className='chat-error'> Edit error: { this.props.editError.message }. Try again. </div>
        if (isModalOpen) this.props.history.push(`/chat/${editId}`);
        if (this.props.response && this.props.response.admin) btnUserList = <button className='btn-nav' onClick = { this.toUserList }> User List </button>
        
        return (
            <div className='chat' tabIndex='0' onKeyDown = { e => { if (e.key === 'ArrowUp') this.props.openModalArrow(messageList, currentUser) }}>
                { btnUserList }
                <button className='btn-nav right' onClick = { this.onLogOut } > Log out </button>
                <Header/>
                <MessageList/>
                <MessageInput/>
                { errorMessage }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { isFetching, error, messageList, chatError } = state.chat;
    const { isModalOpen, editId, editError } = state.editModal;
    return { isFetching, error, isModalOpen, ...state.loading, editId, messageList, chatError, editError };
}

const mapDispatchToProps = {
    ...actions,
    openModal,
    openModalArrow,
    checkUser,
    clearResponse
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
