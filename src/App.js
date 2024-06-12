import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import lovesong from "./json/lovesong.json";

function App() {
  return (
    <>
      <Header />
      <Banner image="claquete-banner.jpg" />
      <Container>
        <h2>Love Song</h2>
        <section className="cards">
          {lovesong.map((music) => <Card id={music.id} key={music.id} />)}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;
