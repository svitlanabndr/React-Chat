import React from 'react';
import './EditModal.css';
import Spinner from '../../Spinner/Spinner.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import { checkUser } from '../../Loading/actions';

class Modal extends React.PureComponent {
	componentDidMount() {
		const jwt = localStorage.getItem('jwt');
        if (jwt)
            this.props.checkUser(jwt);
        else
            this.props.history.push('/login');

        if (this.props.match.params.id) {
            this.props.fetchMessage(this.props.match.params.id)
        }
	}

	onClose = () => {
		this.props.closeModal();
		this.props.history.push('/chat');
	}

	render() {
		if (this.props.editError) {
			return (
				<div>
					<div className='chat-error'>Error: {this.props.editError.message} </div>
					<button className = 'btn btn-secondary' onClick={ this.onClose }> Back to chat </button>
				</div>
			);
		}
		if (!this.props.editValue) return <Spinner/>;
		return (
			<div className = 'modal-wrp'
				style={{
					display: this.props.isModalOpen ? "block" : "none"
				}}>
				<div className='modal my-modal'>
					<input 
						className="edit-input"
						type="text" 
						value={ this.props.editValue } 
						onChange={ evt => this.props.updateEdit(evt.target.value) } 
					/>
					<button className = 'btn btn-primary' onClick={ () => {
						this.props.updateMessage(this.props.editId, this.props.editValue);
						this.onClose();
					}}> Edit </button>
					<button className = 'btn btn-secondary' onClick={ this.onClose }> Cancel </button>
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	isModalOpen: PropTypes.bool,
	editId: PropTypes.string,
	editValue: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
	return { 
		isModalOpen: state.editModal.isModalOpen,
		editId: state.editModal.editId,
		editValue: state.editModal.editValue,
		editError: state.editModal.editError
	 };
}

const mapDispatchToProps = {
	...actions,
	checkUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
