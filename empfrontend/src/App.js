// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Empform from './components/Empform';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Dashboard/> }/>
        
        <Route path='/empform' exact element={ <Empform/> } />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
