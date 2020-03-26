import { combineReducers } from 'redux';

import todos from './todos';
import authenticate from './authenticate';

export default combineReducers({
    todos,
    authenticate
});