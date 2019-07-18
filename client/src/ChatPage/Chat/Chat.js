import React from 'react';
import Header from '../Header/Header.js';
import MessageList from '../MessageList/MessageList.js';
import MessageInput from '../MessageInput/MessageInput.js';
import EditModal from '../EditModal/EditModal.js';
import './Chat.css';
import logo from './logo.png';
import { connect } from 'react-redux';
import * as actions from './actions';
import { checkUser } from '../../Loading/actions';
import { openModal } from '../EditModal/actions';

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
        const { isFetching, error } = this.props;
        if (!this.props.response || isFetching) return <div className='loading'><img className='loading-logo' src={logo} alt="Logo" /></div>;

        if (error) return <div>Error: {error.message}</div>;
//  if response if admin - button
        return (
            <div tabIndex='0' onKeyDown = { e => { if (e.key === 'ArrowUp'); this.props.openModal(undefined, undefined, this.props.messageList) }}>
                <Header/>
                <MessageList/>
                <MessageInput/>
                <EditModal/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { messageList, isFetching, error } = state.chat;
    const { isModalOpen } = state.editModal;
    return { messageList, isFetching, error, isModalOpen, ...state.loading };
}

const mapDispatchToProps = {
    ...actions,
    openModal,
    checkUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
