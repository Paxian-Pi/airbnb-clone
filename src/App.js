import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './layout/AnimatedRoutes';
import Navbar from './layout/Navbar';
import ScreenDimensions from './layout/ScreenDimensions';
import Footer from './layout/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScreenDimensions>
          <AnimatedRoutes />
        </ScreenDimensions>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
