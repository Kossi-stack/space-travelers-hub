import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  addRocketReservation,
  cancelRocketReservation,
} from '../redux/rockets/rockets';

const RocketItem = (props) => {
  const { rocketProps } = props;
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len

  const handleAddReservation = (e) => {
    e.preventDefault();
    dispatch(addRocketReservation(rocketProps.id));
  };

  const handleCancelReservation = (e) => {
    e.preventDefault();
    dispatch(cancelRocketReservation(rocketProps.id));
  };

  return (
    <li className="rockets-item" key={rocketProps.id}>
      <img
        alt="img"
        src={rocketProps.flickr_images[0]}
        className="rockets-item__img"
      />
      <div className="rockets-item__desc">
        <h3 className="rockets-item__desc-h3">{rocketProps.rocket_name}</h3>
        <p className="rockets-item__desc-p">
          {rocketProps.reserved ? (
            <span className="badge badge-active spacing-right">Reserved</span>
          ) : (
            ''
          )}
          {rocketProps.description}
        </p>

        {rocketProps.reserved && (
          <button
            className="btn-gray"
            type="button"
            onClick={handleCancelReservation}
          >
            Cancel Reservation
          </button>
        )}

        {!rocketProps.reserved && (
          <button className="btn" type="button" onClick={handleAddReservation}>
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocketProps: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RocketItem;
