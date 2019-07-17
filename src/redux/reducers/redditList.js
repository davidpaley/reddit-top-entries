const initialState = {
    list: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_REDDIT_LIST':
        return {
          list: action.payload,
        }
      default:
        return state
    }
  }
  