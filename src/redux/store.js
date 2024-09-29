import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Update the import to destructure `thunk`
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
