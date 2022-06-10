import './assets/css/style.css'
import Header from './component/Header';
import Home from './component/Home';
import Stastics from './component/Stastics';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Stastics/>
      <Footer/>
    </div>
  );
}

export default App;
