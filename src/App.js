import "./App.css";
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Notes from "./components/NoteListing/Notes/Notes";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
