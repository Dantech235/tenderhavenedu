import "../scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavContTab, NavTab, socialLinks } from "../utilities/NavTab";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid border-bottom bg-light">
        <div
          className="container topbar bg-primary d-none d-lg-block py-2"
          style={{ borderRadius: "0 40px" }}
        >
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <Link to="/" className="text-white">
                  3, Adekunle Araba Str, Ire-Akari Estate, Isolo
                </Link>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <Link to="/" className="text-white">
                  INFO@TENDERHAVEN.COM
                </Link>
              </small>
            </div>
            <div className="top-link pe-2">
              {socialLinks.map(({ name, icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="btn btn-light btn-sm-square rounded-circle mx-1"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  <i
                    className={`fab fa-${icon} text-secondary`}
                    aria-hidden="true"
                  ></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light navbar-expand-xl py-3">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary display-6">
                Tender<span className="text-secondary">Haven</span>
              </h1>
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fas fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                {NavTab.map((item, index) => (
                  <Link
                    key={index}
                    className="nav-item nav-link"
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    {NavContTab.map((page, index) => (
                      <Link
                        key={index}
                        className="dropdown-item"
                        to={page.path}
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="d-flex me-4">
                <Link to="/" className="position-relative">
                  <i className="fas fa-phone-alt text-primary fa-2x me-4"></i>
                  <div
                    className="position-absolute"
                    style={{ top: "-7px", left: "20px" }}
                  >
                    <i className="fas fa-comment-dots text-secondary"></i>
                  </div>
                </Link>
                <div className="d-flex flex-column pe-3 border-end border-primary">
                  <span className="text-primary">Have any questions?</span>
                  <Link to="/">
                    <span className="text-secondary">
                      Free: +234 07039908226
                    </span>
                  </Link>
                </div>
              </div>
              <button
                className="btn-search btn btn-primary btn-md-square rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search text-white"></i>
              </button>
            </div>
          </nav>
        </div>
      </div>

    
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
