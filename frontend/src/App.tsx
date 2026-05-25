import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Home';
import BookPage from './pages/BookPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livro/:bookId" element={<BookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
