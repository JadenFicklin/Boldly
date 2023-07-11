import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import About from './pages/About';
import FindBoldly from './pages/FindBoldly';
import FoodServices from './pages/FoodService';
import Products from './pages/Products';
import Error from './pages/Error';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/findboldly" element={<FindBoldly />} />
                    <Route path="/foodservices" element={<FoodServices />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
