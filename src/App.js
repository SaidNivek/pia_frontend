import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import MessageBoard from './containers/MessageBoard';
import Calendar from './containers/Calendar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/messagebaord" element={<MessageBoard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
