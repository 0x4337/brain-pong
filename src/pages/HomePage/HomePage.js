import "./HomePage.scss";

const HomePage = () => {
  return (
    <main className="hero">
      <section className="hero__div">
        <h1 className="hero__title">
          BrainP<span className="hero__title-ball">o</span>ng
        </h1>
        <p className="hero__subtitle">BrainStations PingPong Leaderboard.</p>
      </section>

      <section className="input">
        <h4 className="input__title">Input Your Name</h4>

        <div className="input__wrapper">
          <form className="input__form">
            <input placeholder="name" type="text" className="input__input" />
            <button className="input__submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
