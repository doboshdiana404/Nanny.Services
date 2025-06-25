import styles from './LoadMore.module.css';
const LoadMore = ({ setVisibleCount }) => {
  return (
    <div className={styles.loadMoreBtnWrap}>
      <button onClick={() => setVisibleCount(prev => prev + 3)} className={styles.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMore;
