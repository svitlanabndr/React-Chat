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

    makeMessageListProps = (data) => {
        let props = [];
        let previousDay;
        data.forEach(object => {
            let currentDay = new Date(object.created_at).getDate();
            if (previousDay !== currentDay) {
                props.push({
                    break_date: this.getDateFromFormattedDate(object.created_at)
                });
            } 
            previousDay = currentDay;
            const currentMessage = {
                id: object.id,
                avatar: object.avatar,
                created_at: object.created_at,
                message: object.message,
                is_liked: object.is_liked,
                is_mine: object.user === 'Sveta'
            }
            props.push(currentMessage);
        });
        return props;
    }

    getDayFromFormattedDate(formattedDate) {
        const date = formattedDate.split(' ');
        return parseInt(date[0].split('-')[2]);
    }

    getDateFromFormattedDate = formattedDate => formattedDate.split(' ')[0];

    render() {
        const { messageList, isFetching, error } = this.props;
        if (isFetching) return <div className='loading'><img className='loading-logo' src={logo} alt="Logo" /></div>;

        if (error) return <div>Error: {error.message}</div>;
        return (<div>
                <Header/>
                <MessageList data = { this.makeMessageListProps(messageList) } />
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
