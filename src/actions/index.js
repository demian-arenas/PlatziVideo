import { OPEN_MODAL, CLOSE_MODAL, SEARCH_ENTITIES} from '../action-types'

export const openModal = (mediaId) => {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}

export const searchEntities = query => {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query
    }
  };
};
