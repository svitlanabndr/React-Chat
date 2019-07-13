import React from 'react';
import './OutgoingMessage.css';
import { ReactComponent as EditLogo } from './edit.svg';
import { ReactComponent as DeleteLogo } from './delete.svg';
import PropTypes from 'prop-types';

export default class OutgoingMessage extends React.Component {
    openEdit = () => this.props.message.openModal(this.props.message.id);
    delete = () => this.props.message.deleteMessage(this.props.message.id);
    
    shouldComponentUpdate(nextProps) {
        if(nextProps.message.message ===  this.props.message.message) return false;
        return true;
    }

    render() {
        console.log(this.props.message);
        const message = this.props.message;
        return (
            <div className="outgoing_msg">
                <div className="sent_msg">
                    <p>{ message.message }</p>
                    <span className="time_date">{ message.created_at }</span> 
                    <button type="button" className='delete-btn' onClick={this.delete}>< DeleteLogo /></button>      
                    <button type="button" className='edit-btn' onClick={this.openEdit}>< EditLogo /></button>
                </div>
            </div>
        );
    }
}

OutgoingMessage.propTypes = {
	message: PropTypes.shape({
        id: PropTypes.string,
        avatar: PropTypes.string,
        created_at: PropTypes.string,
        message: PropTypes.string,
        is_liked: PropTypes.bool,
        is_mine: PropTypes.bool,
        openModal: PropTypes.func,  
        deleteMessage: PropTypes.func  
    }),
};
