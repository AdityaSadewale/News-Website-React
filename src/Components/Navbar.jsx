import './Navbar.css';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News-Website</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("technology")}>
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("business")}>
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("health")}>
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("sports")}>
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("general")}>
                General
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;