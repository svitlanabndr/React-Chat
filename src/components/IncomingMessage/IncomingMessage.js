import React from 'react';
import './IncomingMessage.css';
import { ReactComponent as UnlikeLogo } from './unlike.svg';
import { ReactComponent as LikeLogo } from './like.svg';
import PropTypes from 'prop-types';

export default class IncomingMessage extends React.Component {
    like = () => this.props.message.likeMessage(this.props.message.id);
    
    shouldComponentUpdate(nextProps) {
        if(nextProps.message.is_liked ===  this.props.message.is_liked) return false;
        return true;
    }

    render() {
        const message = this.props.message;
        const logo = message.is_liked ? <LikeLogo/> : <UnlikeLogo />;

        return (
            <div className = 'incoming_msg'>
                <div className = 'incoming_msg_img'><img src = { message.avatar.toString() } alt='avatar'/></div>
                <div className = 'received_msg'>
                    <div className = 'received_withd_msg'>
                        <p>{ message.message }</p>
                        <span className = 'time_date'>{ message.created_at }</span>
                        <button type="button" className='like-btn' onClick = { this.like }>
                            { logo }
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

IncomingMessage.propTypes = {
	message: PropTypes.shape({
        id: PropTypes.string,
        avatar: PropTypes.string,
        created_at: PropTypes.string,
        message: PropTypes.string,
        is_liked: PropTypes.bool,
        is_mine: PropTypes.bool,
        likeMessage: PropTypes.func  
    }),
};
