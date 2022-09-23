import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './pages/Add.page';
import Books from './pages/Books.page';
import Update from './pages/Update.page';
import './style.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
