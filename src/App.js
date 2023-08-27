import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Review from './Components/Review';
import Discover from './Components/Discover';
import Explore from './Components/Explore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/review' element={<Review />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
