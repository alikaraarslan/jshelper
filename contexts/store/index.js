import { combineReducers, createStore } from 'redux';
import sidebarMenuReducers from '../reducers/sidebarMenuReducers';

const reducers = combineReducers({
  sidebarMenuReducers,
});

export const store = createStore(
  reducers,
  typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);
