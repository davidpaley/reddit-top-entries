export const setRedditList = (redditList, post) => dispatch => {
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

export const savePicture = (img) => dispatch => {
  dispatch({
    type: 'SAVE_PICTURE',
    payload: img,
  })
}
