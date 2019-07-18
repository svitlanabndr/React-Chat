import React from 'react';
import Header from '../Header/Header.js';
import MessageList from '../MessageList/MessageList.js';
import MessageInput from '../MessageInput/MessageInput.js';
import './Chat.css';
import logo from './logo.png';
import { connect } from 'react-redux';
import * as actions from './actions';
import { checkUser } from '../../Loading/actions';
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
    
    render() {
        const { isFetching, error, isModalOpen, editId, messageList, currentUser } = this.props;
        if (!this.props.response || isFetching) return <div className='loading'><img className='loading-logo' src={logo} alt="Logo" /></div>;
        if (error) return <div>Error: {error.message}</div>;
        if (isModalOpen) this.props.history.push(`/chat/${editId}`);

//  if response if admin - button
        return (
            <div tabIndex='0' onKeyDown = { e => { if (e.key === 'ArrowUp') this.props.openModalArrow(messageList, currentUser) }}>
                <Header/>
                <MessageList/>
                <MessageInput/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { isFetching, error, messageList } = state.chat;
    const { isModalOpen, editId } = state.editModal;
    return { isFetching, error, isModalOpen, ...state.loading, editId, messageList };
}

const mapDispatchToProps = {
    ...actions,
    openModal,
    openModalArrow,
    checkUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
