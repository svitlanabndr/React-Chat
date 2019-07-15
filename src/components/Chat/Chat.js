import React from 'react';
import Header from '../Header/Header.js';
import MessageList from '../MessageList/MessageList.js';
import MessageInput from '../MessageInput/MessageInput.js';
import EditModal from '../EditModal/EditModal.js';
import './Chat.css';
import logo from './logo.png';
import { connect } from 'react-redux';
import * as actions from './actions';

class Chat extends React.Component {

    componentDidMount() {
        fetch('https://api.myjson.com/bins/1hiqin')
            .then(response => response.json())
            .then(this.props.loadSuccess) 
            .catch(this.props.loadFail);
    }

    render() {
        const { isFetching, error } = this.props;
        if (isFetching) return <div className='loading'><img className='loading-logo' src={logo} alt="Logo" /></div>;

        if (error) return <div>Error: {error.message}</div>;
        return (<div>
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
    return { messageList, isFetching, error, isModalOpen };
}

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
