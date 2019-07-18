import React, { Component } from "react";
import { connect } from 'react-redux';
import UserItem from './UserItem';
import * as actions from './actions';
import { checkUser } from '../Loading/actions';
import PropTypes from 'prop-types';
import './users.css';
import Spinner from "../Spinner/Spinner";

class UserList extends Component {
	constructor(props) {
		super(props);
		this.onEdit = this.onEdit.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	componentDidMount() {
        const jwt = localStorage.getItem('jwt');
        if (jwt) 
			this.props.checkUser(jwt);
		else
            this.props.history.push('/login');
		this.props.fetchUsers();
    }

	onEdit(id) {
		this.props.history.push(`/users/new/${id}`);
	}

	onDelete(id) {
		this.props.deleteUser(id);
	}

	onAdd() {
		this.props.history.push('/users/new');
	}

	render() {
		if (!this.props.response || !this.props.users) return <Spinner/>;
		if (this.props.response.user) this.props.history.push('/chat');
	
		return (
			<div className="user-list">
				<div className="list-group col-10">
					{
						this.props.users.map(user => {
							return (
								<UserItem
									key={user.id}
									id={user.id}
									name={user.name}
									login={user.login}
									email={user.email}
									onEdit={this.onEdit}
									onDelete={this.onDelete}
								/>
							);
						})
					}
				</div>
				<div className="footer">
					<button
						className="btn btn-success"
						onClick={this.onAdd}
						style={{ margin: "5px" }}
					>
						Add user
					</button>
				</div>
			</div>
		);
	}
}

UserList.propTypes = {
    userData: PropTypes.object
};

const mapStateToProps = (state) => {
	return {
		users: state.users,
		...state.loading
	}
};

const mapDispatchToProps = {
	...actions,
	checkUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);