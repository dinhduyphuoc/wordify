import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Dictionary from "./components/Dictionary";
import HomePage from "./components/HomePage";
import DisplayVocabulary from "./components/DisplayVocabulary";
import FlashCard from "./components/FlashCard";
import CreateFlashCard from "./components/create-flash-card/CreateFlashCard";
import Explore from "./components/Explore";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";

function App() {
  const location = useLocation();

  if (location.pathname === "/")
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/dictionary/:id" element={<DisplayVocabulary />} />
        <Route path="/flash-card" element={<FlashCard />}>
          <Route path="create" element={<CreateFlashCard />} />
          <Route path="explore" element={<Explore />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/dictionary/:id" element={<DisplayVocabulary />} />
        <Route path="/flash-card" element={<FlashCard />}>
          <Route path="create" element={<CreateFlashCard />} />
          <Route path="explore" element={<Explore />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
