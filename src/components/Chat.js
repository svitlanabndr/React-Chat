import React from 'react';
import Header from './Header.js';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: {}, isFetching: true, error: null };
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/1hiqin')
            .then(response => response.json())
            .then(result => this.setState({ data: result, isFetching: false }))
            .catch(e => {
              console.log(e);
              this.setState({ isFetching: false, error: e });
            });
    }

    render() {
        const { data, isFetching, error } = this.state;

        if (isFetching) return <div className='loading'>Loading...</div>; //add spinner

        if (error) return <div>Error: {error.message}</div>;
        console.log(data);
        return (<div>
                <Header/>
                <MessageList/>
                <MessageInput/>
            </div>
        );
    }
  }