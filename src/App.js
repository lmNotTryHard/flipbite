import logo from './logo.svg';
import './App.scss';

// ReactRouterDom
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Header from './Header';
import Main from './Main';

// Data
import Data from './Data.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/fastfood' element={<Main data={Data.content} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
