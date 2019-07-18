import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setRedditList } from '../../redux/actions/redditList';
import ListCard from '../listCard';
import './index.css';


const SidebarMenu = (props) => {
  const [firstPost, setFirstPost] = useState(0);
  const [lastPost, setLastPost] = useState(5);
  const scrollParentRef = useRef(null);
  const { list } = props.redditList;

  const dismissAll = () => {
    props.setRedditList([]);
  }

  const restoreAll = () => {
    const { setRedditList, redditList } = props;
    const newArray = redditList.originalList.map(item => {
      const newItem = { ...item };
      newItem.data.visited = false;
      return newItem;
    });
    setRedditList([...newArray]);
  }

  const onDismissItem = (id) => {
    const { setRedditList, redditList } = props;
    setRedditList(redditList.list.filter(item => item.data.id !== id));
  }

  const onItemClicked = (id) => {
    const { setRedditList, redditList } = props;
    const item = redditList.list.find(i => i.data.id === id);
    item.data.visited = true;
    console.log(item);
    setRedditList(redditList.list, item);
  }

  const nextPage = () => {
    if (lastPost >= list.length) {
      return;
    }
    setFirstPost(firstPost + 5);
    setLastPost(lastPost + 5);
  }

  const previousPage = () => {
    if (firstPost === 0) {
      return;
    }
    setFirstPost(firstPost - 5);
    setLastPost(lastPost - 5);
  }


  return (
    <div className="sidebar-menu" ref={scrollParentRef}>
      <h4 className="title">Reddit posts</h4>
      <hr />
      <button 
        type="button" 
        className="button-apply-all"
        onClick={dismissAll}>Dismiss all</button>
      <button 
        type="button" 
        className="button-apply-all"
        onClick={restoreAll}>Restore all</button>
      {list && list.length > 0 &&
        <>
          {list.slice(firstPost, lastPost).map((item, index) => 
          <ListCard
            key={`${item.data.id}${index}${item.data.visited}`}
            data={item.data}
            onDismissItem={onDismissItem}
            onItemClicked={onItemClicked}
          />)}
          <button 
            type="button" 
            className="button-apply-all"
            onClick={nextPage}>
            Next page
          </button>
          <button 
            type="button" 
            className="button-apply-all"
            onClick={previousPage}>
            Previous Page
          </button>
        </>
      }

    </div>
  )
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  setRedditList: (list, item) => dispatch(setRedditList(list, item)),
});

SidebarMenu.propTypes = {
  redditList: PropTypes.object.isRequired,
  setRedditList: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SidebarMenu);
