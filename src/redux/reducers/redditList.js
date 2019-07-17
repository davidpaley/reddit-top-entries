const initialState = {
    list: [],
    originalList: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_REDDIT_LIST':
        return {
          ...state,
          list: action.payload,
        }
      case 'SET_REDDIT_ORIGINAL_LIST':
        return {
          ...state,
          originalList: action.payload,
        }
      default:
        return state
    }
  }
  