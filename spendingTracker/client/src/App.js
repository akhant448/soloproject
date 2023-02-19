import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DisplayAll from './components/DisplayAll';
import CreateSpending from './components/CreateSpending';
import EditSpending from './components/EditSpending';
import OneSpending from './components/OneSpending';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll/>}/>
          <Route path="/spending/:id/edit" element={<EditSpending/>}/>
          <Route path="/spending/new" element={<CreateSpending/>}/>
          <Route path="/spending/:id" element={<OneSpending/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
