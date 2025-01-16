import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../components/Home';
import Staffs from '../components/Staffs';
import MainLayout from '../components/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>} />
        <Route path="/staffs" element={<Staffs/>} />
      </Route>
    </Routes>
  );
}

export default App;
