const data = (state, { type, payload}) => {
  switch (type) {
    case "SEARCH_VIDEO": {
      const results = state.data.categories
      .map(category => category.playlist.filter(item => {
        const author = item.author.toLowerCase();
        const query = payload.query.toLowerCase();
        return author.includes(query)
      }))
      .filter(category => {
        if (category.length > 0) return category
      })
      

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
