import React from 'react';
import './EditModal.css';

export default class Modal extends React.Component {
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
