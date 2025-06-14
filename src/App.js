import {BrowserRouter as Router , Routes , Route}  from "react-router-dom"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ZooFAQ from "./Components/Faq";
import AboutUs from "./Components/About";
import ContactUs from "./Components/Contact";
function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Slogin" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/faq" element={<ZooFAQ/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>

      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
