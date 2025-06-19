import Header from '@/Layout/Header/Header';
import s from './Home.module.css';
const Home = () => {
  return (
    <section className={s.sectionHero}>
      <Header />
      <div className={s.heroWrap}>
        <div className={s.heroLeftSide}>
          <h1 className={s.heroTitle}>Make Life Easier for the Family:</h1>
          <p className={s.heroDescription}>Find Babysitters Online for All Occasions</p>
          <button className={s.heroBtn}>Get started</button>
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
