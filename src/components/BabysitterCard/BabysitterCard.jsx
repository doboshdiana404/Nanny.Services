import { calculateAge } from '@/utils/calculateAge';
import styles from './BabysitterCard.module.css';
import { useContext, useState } from 'react';
import AppointmentModal from '../../pages/Nannies/modules/AppointmentModal/AppointmentModal';
import { useFavourites } from '@/context/FavouritesContext';
import { arrayToSentence } from '@/utils/arrayToSentence';
import { AuthContext } from '@/context/AuthContext';
import { toast } from 'react-toastify';
const BabysitterCard = ({ nanny, isExpanded, onExpand }) => {
  const { name, avatar_url, education, location, price_per_hour, rating, about, kids_age, experience, characters, birthday, reviews } = nanny;
  const age = calculateAge(birthday);
  const charactersStr = arrayToSentence(characters);
  const [isModalOpen, setModalOpen] = useState(false);
  const { favourites, toggleFavourite } = useFavourites();
  const isFavourite = favourites.some(n => n.id === nanny.id);
  const { user } = useContext(AuthContext);
  const handleFavouriteClick = () => {
    if (!user) {
      toast.info('Please log in to add to favorites');
      return;
    }

    toggleFavourite(nanny);
  };

  return (
    <li className={styles.nannieItemWrap}>
      <div className={styles.nanniesAvatarWrap}>
        <img src={avatar_url} alt={name} width={96} height={96} className={styles.nanniesImg} />
        <div className={styles.online}></div>
      </div>
      <div className={styles.nannieItemTopinfoWrap}>
        <div className={styles.topInfo}>
          <span>Nanny</span>
          <div className={styles.topRightInfoWrap}>
            <div className={styles.mainTopInfo}>
              <p>
                <svg width={16} height={16} className={styles.iconPin}>
                  <use href="/sprite.svg#icon-map-pin"></use>
                </svg>
                <span>{location}</span>
              </p>
              <p>
                <svg width={16} height={16}>
                  <use href="/sprite.svg#icon-star"></use>
                </svg>
                <span style={{ marginLeft: '8px' }}>Rating: {rating}</span>
              </p>
              <p>
                Price / 1 hour: <span style={{ color: '#38cd3e' }}>{price_per_hour}$</span>
              </p>
            </div>
            <button className={styles.favouriteBtn} onClick={handleFavouriteClick}>
              {isFavourite ? (
                <svg width={26} height={26} className={styles.iconHeartFilled}>
                  <use href="/sprite.svg#icon-heart-filled"></use>
                </svg>
              ) : (
                <svg width={26} height={26} style={{ fill: 'none', stroke: '#11101c' }}>
                  <use href="/sprite.svg#icon-heart"></use>
                </svg>
              )}
            </button>
          </div>
        </div>
        <h3 className={styles.nanniesName}>{name}</h3>
        <ul className={styles.detailsInfoList}>
          <li className={styles.detailsInfoItem}>
            Age:{' '}
            <span className={styles.detailsInfoItemSpan} style={{ textDecoration: 'underline' }}>
              {age}
            </span>
          </li>
          <li className={styles.detailsInfoItem}>
            Experience: <span className={styles.detailsInfoItemSpan}>{experience}</span>
          </li>
          <li className={styles.detailsInfoItem}>
            Kids Age: <span className={styles.detailsInfoItemSpan}>{kids_age}</span>
          </li>
          <li className={styles.detailsInfoItem}>
            Characters: <span className={styles.detailsInfoItemSpan}>{charactersStr}</span>
          </li>
          <li className={styles.detailsInfoItem}>
            Education: <span className={styles.detailsInfoItemSpan}>{education}</span>
          </li>
        </ul>
        <p className={styles.aboutDescription}>{about}</p>
        {!isExpanded && (
          <button className={styles.readMoreBtn} onClick={() => onExpand(nanny.id)}>
            Read more
          </button>
        )}
        {isExpanded && (
          <div className={styles.reviewsWrap}>
            <ul className={styles.reviewsList}>
              {reviews.map((review, idx) => (
                <li key={idx} className={styles.reviewItem}>
                  <div className={styles.reviewItemWrap}>
                    <div className={styles.firstLetter}>{review.reviewer.charAt(0)}</div>
                    <div>
                      <h4 className={styles.reviewerName}>{review.reviewer}</h4>
                      <p>
                        <svg width={16} height={16}>
                          <use href="/sprite.svg#icon-star"></use>
                        </svg>
                        <span className={styles.reviewRating}>{review.rating}</span>
                      </p>
                    </div>
                  </div>
                  <p className={styles.reviewComment}>{review.comment}</p>
                </li>
              ))}
            </ul>
            <button className={styles.makeAppointmentBtn} onClick={() => setModalOpen(true)}>
              Make an appointment
            </button>
            <AppointmentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} nanny={nanny} />
          </div>
        )}
      </div>
    </li>
  );
};

export default BabysitterCard;
