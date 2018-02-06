const initialState = {
  visibility: false,
  mediaId: null
};

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
