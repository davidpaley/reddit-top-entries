import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRedditList } from '../../redux/actions/redditList';
import './index.css';


class RedditPage extends PureComponent {
  static propTypes = {
    redditList: PropTypes.object.isRequired,
    setRedditList: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.setRedditList(['pepe 1', 'pepe 2', 'pepe 3']);
  }
  render() {
    const { list } = this.props.redditList;
    return (
      <div className="App">
          <div className="sidebar-menu" />
          <div className="post-container">
            {list && list.length > 0 &&
              list.map(item => <div key={item}>{item}</div>)}
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
