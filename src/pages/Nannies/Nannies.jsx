import BabysitterList from './modules/BabysitterList';

const Nannies = () => {
  return (
    <section style={{ paddingBottom: '100px', paddingTop: '64px', backgroundColor: '#f3f3f3' }}>
      <div className="container">
        <BabysitterList />
      </div>
    </section>
  );
};

export default Nannies;
