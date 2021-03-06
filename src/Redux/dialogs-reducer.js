const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Артем', images: "https://www.sunhome.ru/i/wallpapers/183/malenkii-svidetel.orig.jpg"},
        {id: 2, name: 'Кристина', images: "https://cdn1.flamp.ru/a769790dc94b66c53e25bb1313f5d9b3.JPG"},
        {id: 3, name: 'Женя', images: "https://avatars.mds.yandex.net/get-zen_doc/1537151/pub_5cbf10fa88da1e00b5609c75_5cbf119355863600b3c2c731/scale_1200"},
        {id: 4, name: 'Оля', images: "https://www.1zoom.me/big2/709/293555-alexfas01.jpg"},
        {id: 5, name: 'Транд', images: "https://avatars.mds.yandex.net/get-pdb/1625645/7a31c838-1bce-4570-b1e8-ddbcc11d955e/s1200"},
        {id: 6, name: 'Уил', images: "https://img11.postila.ru/data/9a/fb/c8/bd/9afbc8bd62c00f7c4fdf56d78cb615acbbfcc884913f605036232e459c1dcf31.jpg"}
    ],
    messages: [
        {id: 1, message: 'Сообщение №1'},
        {id: 2, message: 'Сообщение №2'},
        {id: 3, message: 'Сообщение №3'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})
export const updateNewMessageBody = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;