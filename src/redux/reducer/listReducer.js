import { SWITCH_LIST, ADD_INFO } from '../actions';

const INITIAL_STATE = {
  listSwitch: false,
  userInfo: false,
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_LIST:
      return {
        ...state,
        listSwitch: true,
      };
    case ADD_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default listReducer;
