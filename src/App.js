import { Outlet } from 'react-router-dom';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

import './styles/reset.scss';
import './styles/global.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
