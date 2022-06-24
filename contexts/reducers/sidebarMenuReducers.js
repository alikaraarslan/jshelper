import { ACTIVE_JS_SUBJECT, PASSIVE_JS_SUBJECT } from '../types/sidebar';

const initialState = {
  isOpen: true,
  activeJsMainItem: 1,
  activeJsSubItem: 1,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_JS_SUBJECT: {
      return {
        ...state,
        isOpen: true,
        activeJsMainItem: action.payload.activeJsMainItem,
        activeJsSubItem: action.payload.activeJsSubItem,
      };
    }
    case PASSIVE_JS_SUBJECT: {
      return {
        isOpen: false,
        activeJsMainItem: action.payload.activeJsMainItem,
        activeJsSubItem: action.payload.activeJsSubItem,
      };
    }
    default:
      return state;
  }
};

export default reducers;
