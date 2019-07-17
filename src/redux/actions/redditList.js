export const setRedditList = (redditList) => dispatch => {
  dispatch({
    type: 'SET_REDDIT_LIST',
    payload: redditList,
  })
}
  
export const setOriginalRedditList = (redditList) => dispatch => {
  dispatch({
    type: 'SET_REDDIT_ORIGINAL_LIST',
    payload: [...redditList],
  })
}