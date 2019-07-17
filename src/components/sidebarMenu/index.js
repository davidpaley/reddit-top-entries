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

  dismissAll = () => {
    this.props.setRedditList([]);
  }

  restoreAll = () => {
    const { setRedditList, redditList } = this.props;
    const newArray = redditList.originalList.map(item => {
      const newItem = { ...item };
      newItem.data.visited = false;
      return newItem;
    });
    setRedditList([...newArray]);
  }

  onDismissItem = (id) => {
    const { setRedditList, redditList } = this.props;
    setRedditList(redditList.list.filter(item => item.data.id !== id));
  }

  onItemClicked = (id) => {
    const { setRedditList, redditList } = this.props;
    const item = redditList.list.find(i => i.data.id === id);
    item.data.visited = true;
    setRedditList(redditList.list);
  }

  render() {
    const { list } = this.props.redditList;
    // console.log('renderizandooooo list');
    // if (list.length) {
    //   const item = list.find(item => item.data.visited ===true);
    //   console.log (item);
    // }
    return (
      <div className="sidebar-menu">
        <h4 className="title">Reddit posts</h4>
        <hr />
        <button 
          type="button" 
          className="button-apply-all"
          onClick={this.dismissAll}>Dismiss all</button>
        <button 
          type="button" 
          className="button-apply-all"
          onClick={this.restoreAll}>Restore all</button>
        {list && list.length > 0 &&
          list.map((item, index) => 
          <ListCard
            key={`${item.data.id}${index}${item.data.visited}`}
            data={item.data}
            onDismissItem={this.onDismissItem}
            onItemClicked={this.onItemClicked}
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
