import React from 'react';
import Header from './Header.js';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [], isFetching: true, error: null };
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

    makeMessageListProps = (data) => {
        // const props = data.map(object => ({
        //     avatar: object.avatar,
        //     created_at: object.created_at,
        //     message: object.message,
        //     is_mine: object.user === 'Sveta'
        // }));
        let props = [];
        let previousDay;
        data.forEach(object => {
            let currentDay = this.getDayFromFormattedDate(object.created_at);
            if (previousDay !== currentDay) {
                props.push({
                    break_date: this.getDateFromFormattedDate(object.created_at)
                });
            } 
            previousDay = currentDay;
            props.push({
                avatar: object.avatar,
                created_at: object.created_at,
                message: object.message,
                is_mine: object.user === 'Sveta'
            });
        });
        return props;
    }

    getDayFromFormattedDate(formattedDate) {
        const date = formattedDate.split(' ');
        return parseInt(date[0].split('-')[2]);
    }

    getDateFromFormattedDate(formattedDate) {
        const date = formattedDate.split(' ');
        return date[0];
    }

    getFormattedDate = () => {
        const now = new Date();

        let dd = now.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = now.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        const date = now.getFullYear()+'-'+mm+'-'+dd;
        const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        return date+' '+time;
    }

    sendMessage = (text) => {
        const newMessage = {
            id: "9333000183100",
            user: "Sveta",
            avatar: "https://i.pravatar.cc/300?img=14",
            created_at:  this.getFormattedDate(),
            message: text,
            marked_read: false
        };
        console.log(newMessage);
        const copyData = this.state.data;
        copyData.push(newMessage);
        this.setState({ data: copyData });
    }

    render() {
        const { data, isFetching, error } = this.state;

        if (isFetching) return <div className='loading'>Loading...</div>; //add spinner

        if (error) return <div>Error: {error.message}</div>;
        console.log(data);
        return (<div>
                {/* <Header/> */}
                <MessageList data = { this.makeMessageListProps(data) }/>
                <MessageInput sendMessage = { this.sendMessage }/>
            </div>
        );
    }
  }