import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Dictionary from "./components/Dictionary";
import HomePage from "./components/HomePage";
import DisplayVocabulary from "./components/DisplayVocabulary";
import CreateFlashCard from "./components/CreateFlashCard";
import Signup from "./components/Signup";
import Explore from "./components/Explore";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dictionary" element={<Dictionary />} />
        <Route path="dictionary/:id" element={<DisplayVocabulary />} />
        <Route path="flash-card" element={<CreateFlashCard />}>
          <Route path="create" element={<Dictionary />} />
          <Route path="explore" element={<Explore />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
