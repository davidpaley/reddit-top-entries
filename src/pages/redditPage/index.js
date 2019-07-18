import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  setRedditList, 
  setOriginalRedditList,
  savePicture, 
} from '../../redux/actions/redditList';
import { getRedditLastEntries } from '../../service/redditApi';
import SidebarMenu from '../../components/sidebarMenu';
import Post from '../../components/post';
import './index.css';


class RedditPage extends Component {
  static propTypes = {
    redditList: PropTypes.object.isRequired,
    setRedditList: PropTypes.func.isRequired,
    savePicture: PropTypes.func.isRequired,
  };

  componentDidMount() {
    getRedditLastEntries().then(response => {
      const { 
        setRedditList,
        setOriginalRedditList,
       } = this.props;
      const list = response.data.children;
      setOriginalRedditList(list);
      const newList = [...list];
      setRedditList(newList);
    })
  }

  onPictureSave = (img) => {
    if (!this.props.redditList.pictureGalery.includes(img)) {
      this.props.savePicture(img);
    }
  }
  render() {
    const { lastPostVisited, pictureGalery } = this.props.redditList;
    if (pictureGalery.length) {
      console.log('The picture galary has:');
      console.log(pictureGalery);
    }
    return (
      <div className="App">
          <SidebarMenu />
          <Post
            post={lastPostVisited}
            onPictureSave={this.onPictureSave}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  setRedditList: list => dispatch(setRedditList(list)),
  setOriginalRedditList: list => dispatch(setOriginalRedditList(list)),
  savePicture: img => dispatch(savePicture(img)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RedditPage);
