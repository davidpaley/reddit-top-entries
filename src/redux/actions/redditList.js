export const setRedditList = (redditList) => dispatch => {
    dispatch({
      type: 'FETCH_REDDIT_LIST',
      payload: redditList,
    })
  }
  