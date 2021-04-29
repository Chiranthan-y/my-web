import './App.css';
import Header from './Components/Header/Header';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Proficiency from './Pages/Proficiency/Proficiency';
import Skills from './Pages/Skills/Skills';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Skills />
      <Proficiency />
      <Contact />
    </div>
  );
}

export default App;
