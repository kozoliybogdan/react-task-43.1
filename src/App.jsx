import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import "./index.css"

const getLinkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link")

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Task 43.1 — React Router</h1>

        <nav className="nav">
          <NavLink to="/" className={getLinkClass} end>
            Home
          </NavLink>

          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}