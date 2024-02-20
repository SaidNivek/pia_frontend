import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import MessageBoard from './containers/MessageBoard';
import Calendar from './containers/Calendar';
import Tracker from './containers/Tracker';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/messagebaord" element={<MessageBoard />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
