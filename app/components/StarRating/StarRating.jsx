import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styles from './StarRating.module.css';

/**
 * Displays a star rating based on a number.
 * @param {object} props
 * @param {number} props.rating - The rating number (e.g., 4.5)
 */
const StarRating = ({ rating }) => {
  const stars = [];
  const maxStars = 5;

  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      // Full star
      stars.push(<FaStar key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      // Half star
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      // Empty star
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <div className={styles.starContainer}>{stars}</div>;
};

export default StarRating;