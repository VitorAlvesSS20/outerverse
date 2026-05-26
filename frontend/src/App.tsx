import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';
import Home from './pages/Home';
import BookPage from './pages/BookPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livro/:bookId" element={<BookPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
