import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts:[
                {id: 1, message: 'Test text #1', likeCount: 21},
                {id: 2, message: 'Test text #2', likeCount: 34},
                {id: 3, message: 'Test text #3', likeCount: 22},
                {id: 4, message: 'Test text #4', likeCount: 41},
                {id: 5, message: 'Test text #5', likeCount: 12}
            ],
            newPostText: 'hi amigo'
        },

        dialogsPage: {
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
    },
    _callSubscriber () {},
    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    }
}

    /*let block = {
        users: [
    {
        id: 1, images: "https://www.sunhome.ru/i/wallpapers/183/malenkii-svidetel.orig.jpg",
        followed: true, fullName: 'Артем', status: 'i am a boss', location: {city: 'Moscow', country: 'Russia'}
    },
        {
            id: 2,
            images: "https://cdn1.flamp.ru/a769790dc94b66c53e25bb1313f5d9b3.JPG",
            followed: true,
            fullName: 'Кристина',
            status: 'i am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            images: "https://avatars.mds.yandex.net/get-zen_doc/1537151/pub_5cbf10fa88da1e00b5609c75_5cbf119355863600b3c2c731/scale_1200",
            followed: true,
            fullName: 'Женя',
            status: 'i am a boss too',
            location: {city: 'London', country: 'UK'}
        },
        {
            id: 4,
            images: "https://www.1zoom.me/big2/709/293555-alexfas01.jpg",
            followed: true,
            fullName: 'Оля',
            status: 'i am a boss too',
            location: {city: 'London', country: 'UK'}
        },
        {
            id: 5,
            images: "https://avatars.mds.yandex.net/get-pdb/1625645/7a31c838-1bce-4570-b1e8-ddbcc11d955e/s1200",
            followed: false,
            fullName: 'Транд',
            status: 'i am a boss too',
            location: {city: 'Morder', country: 'Mordaria'}
        },
        {
            id: 6,
            images: "https://img11.postila.ru/data/9a/fb/c8/bd/9afbc8bd62c00f7c4fdf56d78cb615acbbfcc884913f605036232e459c1dcf31.jpg",
            followed: false,
            fullName: 'Уил',
            status: 'i am a boss?',
            location: {city: 'Shir', country: 'Mordaria'}
        },
    ]
    }*/

export default store;
window.store = store;