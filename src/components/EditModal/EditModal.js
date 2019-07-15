import React from 'react';
import './EditModal.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import { updateMessage } from '../Chat/actions';

class Modal extends React.Component {
	shouldComponentUpdate(nextProps) {
		return (
			nextProps.isModalOpen !==  this.props.isModalOpen || 
			nextProps.editValue !== this.props.editValue
		);
	}
	
	render() {
		return (
			<div className = 'modal-wrp'
				style={{
					display: this.props.isModalOpen ? "block" : "none"
				}}>
				
				<div className = 'overlay' 
					onClick={ this.props.closeModal }/>
				<div className='modal'>
					<input 
						type="text" 
						value={this.props.editValue} 
						onChange={ (evt) => this.props.updateEdit(evt.target.value) } 
					/>
					<button className = 'edit-btn' onClick={() => {
						this.props.updateMessage(this.props.editId, this.props.editValue);
						this.props.closeModal()
					}}> Edit </button>
					<button className = 'cancel-btn' onClick={ this.props.closeModal }> Cancel </button>
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
	 };
}

const mapDispatchToProps = {
	...actions,
	updateMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)