import React from 'react';
import './IncomingMessage.css';
import { ReactComponent as UnlikeLogo } from './unlike.svg';
import { ReactComponent as LikeLogo } from './like.svg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { likeMessage } from '../Chat/actions';

class IncomingMessage extends React.Component {    
    shouldComponentUpdate(nextProps) {
        return nextProps.message.is_liked !==  this.props.message.is_liked;
    }

    render() {
        const message = this.props.message;
        const logo = message.is_liked ? <LikeLogo/> : <UnlikeLogo />;
        const id = this.props.message.id;
        return (
            <div className = 'incoming_msg'>
                <div className = 'incoming_msg_img'><img src = { message.avatar.toString() } alt='avatar'/></div>
                <div className = 'received_msg'>
                    <div className = 'received_withd_msg'>
                        <p>{ message.message }</p>
                        <span className = 'time_date'>{ message.created_at }</span>
                        <button type="button" className='like-btn' onClick = {() => this.props.likeMessage(id) }>
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
    })
};

function mapStateToProps(state, ownProps) {
    return { message: ownProps.message };
}

const mapDispatchToProps = {
    likeMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomingMessage)
