import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Courses />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
