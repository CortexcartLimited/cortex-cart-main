import ReviewCard from '../ReviewCard/ReviewCard';
import styles from './ReviewScroller.module.css';

/**
 * A horizontal scrolling container for reviews.
 * @param {object} props
 * @param {Array<object>} props.reviews - The array of review objects
 */
const ReviewScroller = ({ reviews }) => {
  return (
    <div className={styles.scroller}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewScroller;