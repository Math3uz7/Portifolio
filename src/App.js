// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  
  // const variaveltest = process.env.TESTE;
  // console.log(variaveltest)

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Services/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
