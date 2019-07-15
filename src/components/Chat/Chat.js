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
    constructor(props) {
        super(props);

		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.likeMessage = this.likeMessage.bind(this);
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/1hiqin')
            .then(response => response.json())
            .then(this.props.loadSuccess) 
            .catch(this.props.loadFail);
    }

    makeHeaderProps = (data) => {

        const usersAmount = data.reduce((set, next) => set.add(next.user), new Set()).size;
        const messagesAmount = data.length;
        const lastMessageTime = data[data.length - 1].created_at;
        return { usersAmount, messagesAmount, lastMessageTime }
    }

    makeMessageListProps = (data) => {
        let props = [];
        let previousDay;
        data.forEach(object => {
            let currentDay = this.getDayFromFormattedDate(object.created_at);
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
            if (currentMessage.is_mine) { 
                currentMessage.openModal = this.openModal;
                currentMessage.deleteMessage = this.deleteMessage;
            } else {
                currentMessage.likeMessage = this.likeMessage;
            }
            props.push(currentMessage);
        });
        return props;
    }

	openModal(id) {
		// this.setState({ 
        //     editValue: this.state.data.find((obj) => obj.id === id).message,
        //     isModalOpen: true,
        //     editId: id
		// });
    }

    closeModal() {
        const currentEditId = this.state.editId;
        const newData = this.state.data.map(obj => {
            if (obj.id === currentEditId) 
                obj.message = this.state.editValue;
            return obj;
        });
        
		// this.setState({
        //     isModalOpen: false,
        //     editValue: undefined,
        //     editId: undefined,
        //     data: newData
		// });
    }
    
    deleteMessage(id) {
        // this.setState({
        //     data: this.state.data.filter(obj => obj.id !== id)
        // });
    }

    likeMessage(id) {
        // this.setState({
        //     data: this.state.data.map(obj => {
        //         if (obj.id === id)
        //             obj.is_liked = !obj.is_liked;
        //         return obj;
        //     })
        // });
    }

    getDayFromFormattedDate(formattedDate) {
        const date = formattedDate.split(' ');
        return parseInt(date[0].split('-')[2]);
    }

    getDateFromFormattedDate(formattedDate) {
        const date = formattedDate.split(' ');
        return date[0];
    }

    render() {
        const { messageList, isFetching, error } = this.props;
        if (isFetching) return <div className='loading'><img className='loading-logo' src={logo} alt="Logo" /></div>; //add spinner

        if (error) return <div>Error: {error.message}</div>;
        return (<div>
                {/* <Header data = { this.makeHeaderProps(messageList) }/> */}
                <MessageList data = { this.makeMessageListProps(messageList) } />
                <MessageInput/>
                {/* <EditModal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal} >
                    <input type="text" 
                        value={this.state.editValue} 
                        onChange={this.updateEditValue} />
                    <button className = 'edit-btn' onClick={this.closeModal}>
                        Edit
                    </button>
                </EditModal> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { messageList, isFetching, error, isModalOpen, editValue, editId } = state.chat
    return { messageList, isFetching, error, isModalOpen, editValue, editId };
}

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
