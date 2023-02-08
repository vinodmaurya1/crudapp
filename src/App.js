import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentData from './components/StudentData';



function App() {
  return (
    <div>
      <Router>
<Navbar/>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/managestudent" element={<StudentData/>}/>

</Routes>

</Router>
    </div>
  );
}

export default App;
