import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import pages from '../features/pages/pagesSlice';
import users from '../features/users/usersSlice';

const loggerMiddleware = createLogger()

const reducer = combineReducers({
  pages: pages,
  users: users,
});

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
);

export default store;