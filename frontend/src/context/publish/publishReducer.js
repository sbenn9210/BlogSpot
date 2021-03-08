import { GET_DRAFTS, GET_PUBLISHES, ADD_DRAFT, ADD_PUBLISH, SET_CURRENT, CLEAR_CURRENT} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_DRAFTS:
      return {
        ...state,
        drafts: action.payload,
      };
    case GET_PUBLISHES:
      return {
        ...state,
        publishes: action.payload,
      };
    case ADD_DRAFT:
      return {
        ...state,
        drafts: [action.payload, ...state.drafts],
      };
    case ADD_PUBLISH:
      return {
        ...state,
        publishes: [action.payload, ...state.drafts],
      };
      case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
      case CLEAR_CURRENT:
      return {
        ...state,
        current: {title:'', body:'', id:''}
      };
    default:
      return state;
  }
};
