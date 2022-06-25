import { ACTIVE_JS_SUBJECT, PASSIVE_JS_SUBJECT } from '../types/sidebar';

const initialState = {
  isOpen: false,
  activeJsMainItem: null,
  activeJsSubItem: null,
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
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducers;
