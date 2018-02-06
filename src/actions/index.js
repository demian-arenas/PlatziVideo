import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_ENTITIES,
  SEARCH_ASYNC_ENTITIES,
  IS_LOADING
} from "../action-types";

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

export const searchAsyncEntities = query => {
  return (dispatch) => {
    dispatch(isLoading(true))
    setTimeout(() => {
      dispatch(searchEntities(query));
      dispatch(isLoading(false));
    }, 5000);
  }
};

export const isLoading = value => {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
};
