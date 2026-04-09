import './App.css';
import Section4 from './component/Section4/Section4';
import Section5 from './component/Section4/Section5/Section5';
import Footer from './component/Section4/Footer/footer';

function App() {
  return (
    <>
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}

export default App;
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
        </div>
    );
};

export default App;
