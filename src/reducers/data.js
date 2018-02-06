import schema from "../schemas";
import { fromJS } from "immutable";

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: [],
})

const data = (state = initialState, { type, payload}) => {
  switch (type) {
    case "SEARCH_VIDEO": {
      const results = []

      if (payload.query) {
        state.data.categories
        .map(category => category.playlist.filter(item => item.author.toLowerCase().includes(payload.query.toLowerCase()) && results.push(item)
        ))
      }

      return {
        ...state,
        search: results
      }
    }
      break;
    default:
      return state;
  }
}

export default data
