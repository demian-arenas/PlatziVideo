import schema from "../schemas";
import { fromJS } from "immutable";

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: ''
})

const data = (state = initialState, { type, payload}) => {
  switch (type) {
    case "SEARCH_VIDEO": {
      return state.set('search', payload.query)
    }
      break;
    default:
      return state;
  }
}

export default data
