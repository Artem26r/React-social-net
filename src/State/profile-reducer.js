const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[
        {id: 1, message: 'Test text #1', likeCount: 21},
        {id: 2, message: 'Test text #2', likeCount: 34},
        {id: 3, message: 'Test text #3', likeCount: 22},
        {id: 4, message: 'Test text #4', likeCount: 41},
        {id: 5, message: 'Test text #5', likeCount: 12}
    ],
    newPostText: 'hi amigo'
}

const profileReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;