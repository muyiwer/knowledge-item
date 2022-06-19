export const Loader: React.FC = () => {
  return (
    <>
      <section className="loader" >
        <span className="home-logo1" data-testid="logo-name">Knowledge</span>
        <span className="home-logo2" data-testid="logo-name2">Item</span>
        <br />
      </section>
      <div className="loader-text" data-testid="loader">Loading....</div>
    </>
  );
};
