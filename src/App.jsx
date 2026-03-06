import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Experience from "./components/sections/Experience";
import Gallery from "./components/sections/Gallery";
import Credentials from "./components/sections/Credentials";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Gallery />
      <Credentials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
