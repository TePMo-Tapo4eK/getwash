import React,{useState} from 'react';
import AppInfo from './components/AppInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import MainInfo from './components/MainInfo';
import PartnersInfo from './components/PartnersInfo';
import PartnersModal from './components/PartnersModal';
import Reviews from './components/Reviews';
import StartInfo from './components/StartInfo';
import './css/App.css';

function App() {
  const [partners, setPartners] = useState(false)
  const OpenPartners = () => {
    setPartners(()=> !partners)
  }
  return (
    <div className="App">
      <Header/>
      <MainInfo/>
      <StartInfo/>
      <PartnersInfo OpenPartners={OpenPartners}/>
      <AppInfo/>
      <Reviews/>
      <Footer/>
      <PartnersModal partners={partners} setPartners={setPartners} OpenPartners={OpenPartners}/>
    </div>
  );
}

export default App;
