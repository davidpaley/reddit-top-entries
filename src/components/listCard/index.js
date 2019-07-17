import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
import './index.css';


class ListCard extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const { data } = this.props;
    return (
      <div className="list-card">
        <h5 className="list-title">{data.author}</h5>
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
        <hr className="card-division" />
      </div>
    )
  }
}

export default ListCard;
