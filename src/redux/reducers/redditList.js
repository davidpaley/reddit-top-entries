const initialState = {
    list: [],
    originalList: [],
    lastPostVisited: {},
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_REDDIT_LIST':
        return {
          ...state,
          list: action.payload,
          lastPostVisited: action.lastPostVisited
        }
      case 'SET_REDDIT_ORIGINAL_LIST':
        return {
          ...state,
          originalList: action.payload,
        }
      case 'SET_VISITED_POST':
        return {
          ...state,
          lastPostVisited: action.payload,
        }
      default:
        return state
    }
  }
  