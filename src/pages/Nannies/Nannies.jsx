import BabysitterList from '../../modules/BabysitterList/BabysitterList';

const Nannies = () => {
  return (
    <section style={{ paddingBottom: '100px', paddingTop: '64px', backgroundColor: '#f3f3f3', minHeight: '650px' }}>
      <div className="container">
        <BabysitterList />
      </div>
    </section>
  );
};

export default Nannies;
