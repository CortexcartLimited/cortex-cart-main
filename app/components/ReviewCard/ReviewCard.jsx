import StarRating from '@/app/components/StarRating/StarRating';
import styles from '@/app/components/ReviewCard/ReviewCard.module.css';

/**
 * A single review card.
 * @param {object} props
 * @param {object} props.review - The review object
 * @param {string} props.review.name - Author's name
 * @param {number} props.review.rating - Rating number
 * @param {string} props.review.text - Review text
 * @param {string} props.review.title - Review title
 */
const ReviewCard = ({ review }) => {
  return (
    <div className={styles.card}>
      <StarRating rating={review.rating} />
      <h3 className={styles.title}>"{review.title}"</h3>
      <p className={styles.text}>"{review.text}"</p>
      <span className={styles.author}>- {review.name}</span>
    </div>
  );
};

export default ReviewCard;