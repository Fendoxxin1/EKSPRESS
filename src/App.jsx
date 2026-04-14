import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section4/Section5/Section5";
import Footer from "./components/Section4/Footer/footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurServices from "./pages/OurServices/OurServices";
const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <AboutUs />
            <OurServices />
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    );
};

export default App;
