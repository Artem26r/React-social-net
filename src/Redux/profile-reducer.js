const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts:[
        {id: 1, message: 'Test text #1', likeCount: 21},
        {id: 2, message: 'Test text #2', likeCount: 34},
        {id: 3, message: 'Test text #3', likeCount: 22},
        {id: 4, message: 'Test text #4', likeCount: 41},
        {id: 5, message: 'Test text #5', likeCount: 12}
    ],
    newPostText: 'hi amigo',
    profile: null
}

const profileReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostText = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;