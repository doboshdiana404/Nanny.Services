import { useNavigate } from 'react-router-dom';
import s from './Home.module.css';
import { useEffect } from 'react';
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <section className={s.sectionHero}>
      <div className={s.heroWrap}>
        <div className={s.heroLeftSide}>
          <h1 className={s.heroTitle}>Make Life Easier for the Family:</h1>
          <p className={s.heroDescription}>Find Babysitters Online for All Occasions</p>
          <button className={s.heroBtn} onClick={() => navigate('/nannies')}>
            Get started
            <span className={`${s.icon} ${s.defaultIcon} `}>
              <svg width={15} height={17}>
                <use href="/sprite.svg#icon-Arrow"></use>
              </svg>
            </span>
            <span className={`${s.icon} ${s.hoverIcon}`}>
              <svg width={20} height={16}>
                <use href="/sprite.svg#icon-Arrow2"></use>
              </svg>
            </span>
          </button>
        </div>
        <div className={s.heroRightSide}>
          <div className={s.heroInfoWrap}>
            <div className={s.heroCheckWrap}>
              <svg width={30} height={30} className={s.iconCheck}>
                <use href="/sprite.svg#icon-check"></use>
              </svg>
            </div>
            <div>
              <p className={s.heroInfo}>Experienced nannies</p>
              <p className={s.heroInfoNumber}>15,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
