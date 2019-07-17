export const setRedditList = (redditList, post) => dispatch => {
  console.log(post);
  console.log(redditList);
  dispatch({
    type: 'SET_REDDIT_LIST',
    payload: redditList,
    lastPostVisited: post ? post : {}
  })
}
  
export const setOriginalRedditList = (redditList) => dispatch => {
  dispatch({
    type: 'SET_REDDIT_ORIGINAL_LIST',
    payload: [...redditList],
  })
}
