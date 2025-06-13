import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Fellows from './components/Fellows';
import CreateFellows from './components/CreateFellows';
import UpdateFellows from './componets/UpdateFellows';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
           <Route path = "/" element={<Fellows />} > </Route>
           <Route path = "/create" element={<CreateFellows />} > </Route>
           <Route path = "/update/:id" element={<UpdateFellows />} > </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
