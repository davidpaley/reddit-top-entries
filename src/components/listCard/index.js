import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import './index.css';

class ListCard extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    onDismissItem: PropTypes.func.isRequired,
    onItemClicked: PropTypes.func.isRequired,
  };

  getHoursAgo = (date) => {
    const postDate = new Date(date*1000);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - postDate.getTime());
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)); 
    return diffHours;
  }

  dismissItem = () => {
    const { data, onDismissItem } = this.props;
    onDismissItem(data.id);
  }

  itemClicked = () => {
    const { data, onItemClicked } = this.props;
    onItemClicked(data.id);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="list-card-container">
        <div 
          onClick={this.itemClicked}
          className={`list-card ${data.visited === true ? 'visited-item' : ''}`}>
          <div className="title-container">
            <h5 className="list-title">{data.author}</h5>
            <span className="hours-container">
              {this.getHoursAgo(data.created)} hours ago
            </span>
          </div>
          <div className="container">
            <div className="img-container">
              {data.thumbnail &&
              <img src={data.thumbnail} alt="" />}
              <span className="text-container">
                {data.title}
              </span>
            </div>
            <div className="arrow">
              >
            </div>
          </div>
        </div>
        <div className="title-container">
          <button 
            type="button" 
            className="button-dismiss"
            onClick={this.dismissItem}>
            Dismiss post
          </button>
          <span className="num-comments">{data.num_comments} comments</span>
        </div>
        <hr className="card-division" />
      </div>
    )
  }
}

export default ListCard;
