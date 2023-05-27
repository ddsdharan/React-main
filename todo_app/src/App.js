import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import Login from './components/Login';



function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </Router>
    </main>
  );
}

export default App;