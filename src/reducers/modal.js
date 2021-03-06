import { fromJS } from 'immutable'
import { OPEN_MODAL, CLOSE_MODAL} from '../action-types'

const initialState = fromJS({
  visibility: false,
  mediaId: null
})

const modal = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return state.merge({
        visibility: true,
        mediaId: payload.mediaId
      })
      break;
    case CLOSE_MODAL: 
      return state.set('visibility', false)
      break;
    default:
      return state;
  }
};

export default modal
