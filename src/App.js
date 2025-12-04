import Header from './components/header/Header.jsx';

import './styles/reset.scss';
import './styles/global.scss';
import Footer from './components/footer/Footer.jsx';
import HomePage from './pages/home/HomePage.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
