import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRedditList, 
  setOriginalRedditList 
} from '../../redux/actions/redditList';
import { getRedditLastEntries } from '../../service/redditApi';
import SidebarMenu from '../../components/sidebarMenu';
import Post from '../../components/post';
import './index.css';


class RedditPage extends Component {
  static propTypes = {
    redditList: PropTypes.object.isRequired,
    setRedditList: PropTypes.func.isRequired,
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
  render() {
    const { lastPostVisited } = this.props.redditList;
    return (
      <div className="App">
          <SidebarMenu />
          <Post
            post={lastPostVisited}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RedditPage);
