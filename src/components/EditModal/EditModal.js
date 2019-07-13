import React from 'react';
import './EditModal.css';
import PropTypes from 'prop-types';

export default class Modal extends React.Component {
	shouldComponentUpdate(nextProps) {
        if(
			nextProps.isModalOpen ===  this.props.isModalOpen && 
			nextProps.children[0].props.value === this.props.children[0].props.value) return false;
        return true;
    }
	render() {
		return (
			<div className = 'modal-wrp'
				style={{
					display: this.props.isModalOpen ? "block" : "none"
				}}
			>
				<div className = 'overlay' onClick={this.props.closeModal} />
				<div onClick={this.props.closeModal} />
				<div className='modal'>{this.props.children}</div>
			</div>
		);
	}
}

Modal.propTypes = {
	children: PropTypes.arrayOf(PropTypes.object),
	closeModal: PropTypes.func,
	isModalOpen: PropTypes.bool,
};