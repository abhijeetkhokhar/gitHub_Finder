import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GitHubUsers from "./pages/GitHubUsers";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/github-users" element={<GitHubUsers/>} />
        <Route path="/github-users/:username" element={<UserDetails/>} />
      </Routes>
    </>
  );
}

export default App;
