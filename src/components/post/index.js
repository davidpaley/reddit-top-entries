import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import './index.css';

class Post extends PureComponent {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post } = this.props;
    if (post && post.data) {
      return (
        <div className="post-container">
          <h1 className="post-title">{post.data.author}</h1>
          {post.data.thumbnail &&
            <img className="img-post" src={post.data.thumbnail} alt="" />}
          <span>{post.data.title}</span>
        </div>
      )
    }
    return <div className="post-container" />
  }
}

export default Post;
