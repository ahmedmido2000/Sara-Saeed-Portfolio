import './App.css';
import Header from "./components/Header/Header.js";
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Services from './components/Services/Services';
import Highlights from './components/Highlights/Highlights';
import Why from './components/Why/Why';
import Tools from './components/Tools/Tools';
import Certificates from './components/Certificates/Certificates';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Header />
      <Testimonials />
      <About />
      <Services />
      <Highlights />
      <Why />
      <Tools />
      <Certificates />
      <Footer />
      </div>
    </div>
  );
}

export default App;
