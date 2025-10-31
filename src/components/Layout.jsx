import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="brand">Dahoon LEE</div>
        <header className="top-nav">
          <div className="brand">Dahoon LEE</div>
          <nav className="menu">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/stack">Tech Stack</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/ps">Problem Solving</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>
      </header>
      <main className="content">{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()} Dahoon LEE. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
