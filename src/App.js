import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Dictionary from "./components/Dictionary";
import HomePage from "./components/HomePage";
import DisplayVocabulary from "./components/DisplayVocabulary";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/dictionary/:id" element={<DisplayVocabulary />} />
      </Routes>
    </div>
  );
}

export default App;
