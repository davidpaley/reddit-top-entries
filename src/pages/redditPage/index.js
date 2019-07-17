import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRedditList, 
  setOriginalRedditList 
} from '../../redux/actions/redditList';
import { getRedditLastEntries } from '../../service/redditApi';
import SidebarMenu from '../../components/sidebarMenu';
import './index.css';


class RedditPage extends PureComponent {
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
          <div className="post-container">
            <h1>{lastPostVisited && lastPostVisited.data && lastPostVisited.data.title}</h1>
          </div>
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
