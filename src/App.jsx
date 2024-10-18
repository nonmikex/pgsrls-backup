import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicesDetail from "./pages/ServicesDetail";
import WorkWithUs from "./pages/WorkWithUs";
import Contacts from "./pages/Contacts";
import Vetrina from "./pages/Vetrina";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servizi" element={<Services />} />
        <Route path="/servizi/:slug" element={<ServicesDetail />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/lavora-con-noi" element={<WorkWithUs />} />
        <Route path="/contatti" element={<Contacts />} />
        <Route path="/vetrina" element={<Vetrina />} />
      </Routes>
    </Router>
  );
}

export default App;
