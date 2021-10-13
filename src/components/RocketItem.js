import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => (
  <li className="rockets-item" key={rocket.id}>
    <img
      alt="img"
      src={rocket.flickr_images[0]}
      className="rockets-item__img"
    />
    <div className="rockets-item__desc">
      <h3 className="rockets-item__desc-h3">{rocket.rocket_name}</h3>
      <p className="rockets-item__desc-p">{rocket.description}</p>
      <button className="btn" type="button">
        Reserve Rocket
      </button>
    </div>
  </li>
);

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RocketItem;
