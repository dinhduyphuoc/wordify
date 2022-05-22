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

const Navigation = function () {
  // Set initial state to homepage
  let currentSite = new HomePage(this);

  // Changing state method
  this.navigate = function (site) {
    currentSite = site;

    currentSite.navigate();
  };
};

const HomePage = function (site) {
  this.site = site;

  this.navigate = function () {
    return <Route path="/" element={<HomePage />} />;
  };
};

const Dictionary = function (site) {
  this.site = site;

  this.navigate = function () {
    return <Route path="/dictionary" element={<Dictionary />} />;
  };
};

const FlashCard = function (site) {
  this.site = site;

  this.navigate = function () {
    return <Route path="/flash-card" element={<FlashCard />} />;
  };
};

const NotFound = function (site) {
  this.site = site;

  this.navigate = function () {
    return <Route path="/not-found" element={<NotFound />} />;
  };
};

function Navigator() {
  // State object
  const navigation = new Navigation();
  // useLocation hook
  const location = useLocation();
  const site = null;

  switch (location.pathname) {
    case "/":
      site = navigation.navigate(new HomePage());
      break;
    case "/dictionary":
      site = navigation.navigate(new Dictionary());
      break;
    case "/flash-card":
      site = navigation.navigate(new FlashCard());
      break;
    default:
      site = navigation.navigate(new NotFound());
  }

  return <Routes>{site}</Routes>;
}

export default Navigator;
