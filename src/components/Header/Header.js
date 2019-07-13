import React from 'react';

export default class Header extends React.Component {
    shouldComponentUpdate(nextProps) {
        if(
            nextProps.data.usersAmount === this.props.data.usersAmount &&
            nextProps.data.messagesAmount === this.props.data.messagesAmount &&
            nextProps.data.lastMessageTime === this.props.data.lastMessageTime
            ) return false;
        return true;
    }

    render() {
        console.log(this.props.data);
        return <div>Header</div>
    }
}
