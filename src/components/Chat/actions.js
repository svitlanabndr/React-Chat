import { LOAD_SUCCESS, LOAD_FAIL, ADD_MESSAGE, UPDATE_INPUT, LIKE_MESSAGE } from "./actionTypes";

export const loadSuccess = (messageList) => ({
    type: LOAD_SUCCESS,
    payload: {
        messageList: messageList.map(obj => {
                obj.is_liked = false;
                return obj;
            }), 
        isFetching: false 
    }
});

export const loadFail = (error) => ({
    type: LOAD_FAIL,
    payload: {
        error,
        isFetching: false
    }

});

export const addMessage = () => ({
    type: ADD_MESSAGE,
    payload: {
        newMessage: {
            id:  Math.floor(Math.random() * 1000000).toString(),
            user: "Sveta",
            avatar: "https://i.pravatar.cc/300?img=14",
            created_at:  getFormattedDate(),
            message: '',
            is_liked: false,
            marked_read: false
        } 
    }
});

export const updateInput = (newInput) => ({
    type: UPDATE_INPUT,
    payload: {
        inputValue: newInput
    }
});

export const likeMessage = id => ({
    type: LIKE_MESSAGE,
    payload: {
        id
    }
});

const getFormattedDate = () => {
    const now = new Date();

    let dd = now.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = now.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    const date = now.getFullYear()+'-'+mm+'-'+dd;
    const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return date+' '+time;
}