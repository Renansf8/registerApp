import { combineReducers } from 'redux';
import info from './infoReducer';
import list from './listReducer';

const rootReducer = combineReducers({ info, list });

export default rootReducer;
