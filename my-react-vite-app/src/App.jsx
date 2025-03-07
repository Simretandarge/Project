import './App.css';
import About from './componenets/About.jsx';
import Contact from './componenets/Contact.jsx';
import Footer from './componenets/Footer.jsx';
import Hero from './componenets/Hero.jsx';
import Navbar from "./componenets/Navbar.jsx";
import Projects from './componenets/Projects.jsx';
import Service from './componenets/Service.jsx';

function App() {
  // Accessing the VITE_API_URL environment variable
  const apiUrl = import.meta.env.VITE_API_URL;

  console.log('API URL:', apiUrl);  // You can remove this line once you confirm the URL is correct

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
