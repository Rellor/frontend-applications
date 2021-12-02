import logo from "../../src/logo.svg";

function HomeBody() {
  return (
    <div className="App">
      <header className="App-body">
        <img src={logo.src} className="App-logo" alt="logo" />
        <p>Welkom! Je kan via de link hierboven naar de wordcloud!</p>
      </header>
    </div>
  );
}

export default HomeBody;
