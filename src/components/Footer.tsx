import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/bootstrap.scss";
import { FaCopyright } from "react-icons/fa";
import { contactInfo, socialIcons } from "../utilities/NavTab";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <h2 className="fw-bold mb-3">
                <span className="text-primary">Tender</span>
                <span className="text-secondary">Haven</span>
              </h2>
              <p>
                The best foundation for a lifetime of learning starts here at
                TenderHavenEdu! 💡📚💙 #BrightFutures
              </p>
              <div className="border border-primary p-3 rounded bg-light">
                <h5>Newsletter</h5>
                <div
                  className="position-relative mx-auto border border-primary rounded"
                  style={{ maxWidth: "400px" }}
                >
                  <input
                    className="form-control border-0 w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div
                className="d-flex flex-column p-4 ps-5 text-dark border border-primary"
                style={{ borderRadius: "50% 20% / 10% 40%" }}
              >
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map((day) => (
                  <p key={day}>{day}: 8am to 5pm</p>
                ))}
                <p className="mb-0">Sunday: Closed</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2">
                LOCATION
              </h4>
              <div>
                <div>
                  {contactInfo.map(({ Icon, text }, index) => (
                    <p
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      <Icon className="text-primary me-2" />
                      {text}
                    </p>
                  ))}
                </div>
                <div className="d-flex flex justify-center items-center">
                  {socialIcons.map(({ name, Icon, link }, index) => (
                    <a
                      key={index}
                      className="btn btn-primary flex justify-center items-center btn-sm-square me-3 rounded-circle text-white"
                      style={{
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Gallery */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2">
                OUR GALLERY
              </h4>
              <div className="row g-3">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="col-4">
                    <img
                      src={`/img/galary-${num}.jpg`}
                      className="img-fluid rounded-circle border border-primary p-2"
                      alt="Gallery"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 flex text-center text-md-start mb-3 mb-md-0">
              <span
                className="text-light flex"
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <FaCopyright
                  className="text-light me-2"
                  style={{ minHeight: "10px", minWidth: "10px" }}
                />{" "}
                tenderhavenedu.com, All rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-white">
              Designed by{" "}
              <a href="dezeugo8@gmail.com" className="border-bottom">
                Dantech
              </a>{" "}
              & Distributed by{" "}
              <a href="09068748551" className="border-bottom">
                Danny
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
