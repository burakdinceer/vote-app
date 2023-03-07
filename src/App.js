import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Submit from './pages/Submit/Submit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/submit' element={<Submit/>}/>
      </Routes>
    </div>
  );
}

export default App;
