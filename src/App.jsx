import AddTask from "./components/AddTask/AddTask";
import { Route, Routes } from "react-router-dom";
import "./style/App.scss";
import Filter from "./components/Filter/Filter";
import Profile from "./components/Profile/Profile";
import Theme from "./components/Theme/Theme";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NawBar";
import ContentMap from "./components/ContentMap/ContentMap";
import Footer from "./components/Footer/Footer";
import Team from "./components/Footer/Team/Team";
import Contact from "./components/Footer/Contact/Contact";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from "./components/LoginPage/Registration/RegistrationPage/RegistrationPage";
import EnterPage from "./components/LoginPage/Enter/EnterPage/EnterPage";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <NavBar />
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/addtask" element={<AddTask />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registrationpage" element={<RegistrationPage />} />
          <Route path="/enterpage" element={<EnterPage />} />
        </Routes>
      </header>
      <ContentMap />
      <Footer />
    </div>
  );
}

export default App;
