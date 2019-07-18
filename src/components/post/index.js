import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import './index.css';

class Post extends PureComponent {
  static propTypes = {
    post: PropTypes.object.isRequired,
    onPictureSave: PropTypes.func.isRequired,
  };

  onPictureSave = () => {
    const { post, onPictureSave } = this.props;
    if (post.data.thumbnail) {
      onPictureSave(post.data.thumbnail);
    }
  }

  render() {
    const { post } = this.props;
    if (post && post.data) {
      return (
        <div className="post-container">
          <h1 className="post-title">{post.data.author}</h1>
          {post.data.thumbnail &&
            <img className="img-post" src={post.data.thumbnail} alt="" />}
          <span>{post.data.title}</span>
          <button className="button-save-picture" type="button" onClick={this.onPictureSave}>
            Save Picture in "Picture Galery" and check the console
          </button>
        </div>
      )
    }
    return <div className="post-container" />
  }
}

export default Post;
