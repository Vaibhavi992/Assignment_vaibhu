import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {thunk} from 'redux-thunk';
import userReducer from './reducers/userReducer';

// Combine reducers
const rootReducer = combineReducers({
  users: userReducer,
});

// Manually configure Redux DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
