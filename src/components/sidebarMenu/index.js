import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRedditList } from '../../redux/actions/redditList';
import ListCard from '../listCard';
import './index.css';


class sidebarMenu extends Component {
  static propTypes = {
    redditList: PropTypes.object.isRequired,
    setRedditList: PropTypes.func.isRequired,
  };

  render() {
    const { list } = this.props.redditList;
    return (
      <div className="sidebar-menu">
        <h4 className="title">Reddit posts</h4>
        <hr />
        {list && list.length > 0 &&
          list.map((item, index) => 
          <ListCard
            key={`${item.data.title}${index}`}
            data={item.data} 
          />)}
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
)(sidebarMenu);
