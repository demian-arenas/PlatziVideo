import { fromJS } from 'immutable'

const initialState = fromJS({
  visibility: false,
  mediaId: null
})

const modal = (state = initialState, { type, payload }) => {
  switch (type) {
    case "OPEN_MODAL":
      return state
      break;
    case 'CLOSE_MODAL': 
      return state
      break;
    default:
      return state;
  }
};

export default modal
