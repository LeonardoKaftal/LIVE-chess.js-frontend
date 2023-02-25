import '../src/assets/index.css';
import Chess from './component/Chess';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChessLogin from './component/ChessLogin';

function App() {
  return (
  <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ChessLogin />} />
          <Route path='/chess' element={<Chess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
