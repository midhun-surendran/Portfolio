import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skils from "./Components/Skils";
import Work from "./Components/work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skils />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
