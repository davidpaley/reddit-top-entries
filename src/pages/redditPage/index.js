import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRedditList } from '../../redux/actions/redditList';
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
      console.log(response);
      const list = response.data.children;
      console.log(list.length);
      this.props.setRedditList(list);
    })
  }
  render() {
    const { list } = this.props.redditList;
    return (
      <div className="App">
          <SidebarMenu />
          <div className="post-container">
            {list && list.length > 0 &&
              list.map((item, index) => <div key={`${item.data.title}${index}`}>{item && item.data.title}</div>)}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RedditPage);
