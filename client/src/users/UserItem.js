import React, { Component } from "react";

export default class UserItem extends Component {
    render() {
        const { id, name, login, email } = this.props;
        return (
            <div className="container list-group-item">
                <div className="row">
                    <div className="user-info">
                        <span className="badge badge-secondary" style={{ fontSize: "2em", margin: "2px" }}>{name} ({login})</span>
                        <span className="badge badge-info">{email}</span>
                    </div>
                    <div className="col-4 btn-group">
                        <button className="btn btn-primary" onClick={(e) => this.props.onEdit(id)}> Edit </button>
                        <button className="btn btn-dark" onClick={(e) => this.props.onDelete(id)}> Delete </button>
                    </div>
                </div>
            </div>
        );
    }
};