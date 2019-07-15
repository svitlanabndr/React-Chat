import React from 'react';
import './OutgoingMessage.css';
import { ReactComponent as EditLogo } from './edit.svg';
import { ReactComponent as DeleteLogo } from './delete.svg';
import PropTypes from 'prop-types';
import { deleteMessage } from '../Chat/actions';
import { openModal} from '../EditModal/actions';
import { connect } from 'react-redux';

class OutgoingMessage extends React.Component {  
    // shouldComponentUpdate(nextProps) {
    //     if(nextProps.message.message ===  this.props.message.message) return false;
    //     return true;
    // }

    render() {
        const message = this.props.message;
        return (
            <div className="outgoing_msg">
                <div className="sent_msg">
                    <p>{ message.message }</p>
                    <span className="time_date">{ message.created_at }</span> 
                    <button type="button" className='delete-btn' onClick={ () => this.props.deleteMessage(message.id) }>< DeleteLogo /></button>      
                    <button type="button" className='edit-btn' onClick={ () => this.props.openModal(message.id, message.message) }>< EditLogo /></button>
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
    }),
};

function mapStateToProps(state, ownProps) {
    return { message: ownProps.message };
}

const mapDispatchToProps = {
    deleteMessage,
    openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(OutgoingMessage)