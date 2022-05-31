
import AppInfo from './components/AppInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import MainInfo from './components/MainInfo';
import PartnersInfo from './components/PartnersInfo';
import Reviews from './components/Reviews';
import StartInfo from './components/StartInfo';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainInfo/>
      <StartInfo/>
      <PartnersInfo/>
      <AppInfo/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
