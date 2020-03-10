const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
        }
    },
    _callSubscriber () {},
    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    // addPost () {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText (newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}



export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})






export default store;
window.store = store;