import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Success from './components/Success';
import Login from './components/Login';
import './App.css';
import './components/Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="content-section">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
