import React from 'react';
import * as actions from './actions';
import { connect } from 'react-redux';

class Loading extends React.Component { 
    componentDidMount() {
        const jwt = localStorage.getItem('jwt');
        jwt ?
            this.props.checkUser(jwt) :
            this.props.history.push('/login');
    }

    render() {
        if (this.props.admin) {
            this.props.history.push('/users');
        } else if (this.props.user) {
            this.props.history.push('/chat');
        }

        return <div>Loading</div>
    }
}

function mapStateToProps(state) {
    return { ...state.loading };
}

const mapDispatchToProps = {
	...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);