import { combineReducers } from 'redux';


const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

const photosReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS':
      return action.payload;
    default:
      return state;
  }
};

const usersReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        return action.payload;
      default:
        return state;
    }
  };

export default combineReducers({
  posts: postsReducer,
  photos: photosReducer,
  users: usersReducer,
});
