import './App.css'
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import {themeContext} from './Context';
import {useContext} from 'react'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="App" style={{background : darkMode?'black':'', color : darkMode?'white':''}}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
