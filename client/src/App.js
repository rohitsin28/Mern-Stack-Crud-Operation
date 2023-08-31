import { Route, Routes } from "react-router-dom";
import Post from "./crud/post";
import Read from "./crud/read";
import Update from "./crud/update";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
      <Routes>
        <Route path="/" element={<Read/>}/>
        <Route path="/insert" element={<Post/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
