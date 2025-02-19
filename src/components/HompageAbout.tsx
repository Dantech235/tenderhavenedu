import React, { useState } from "react";

const HompageAbout: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState("");

  const handleOpenModal = () => {
    setVideoSrc("/tendervideo1.mp4"); // Set video source when modal opens
  };

  const handleCloseModal = () => {
    setVideoSrc(""); // Remove video source when modal closes
  };

  return (
    <div className="container-fluid py-5 about bg-light">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="video border">
              <button
                type="button"
                className="btn btn-play"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
                onClick={handleOpenModal} // Open modal and set video src
              >
                <span></span>
              </button>
            </div>
          </div>
          <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              About Us
            </h4>
            <h1 className="text-dark mb-4 display-5">
              Where Little Hands Create Big Dreams!
            </h1>
            <p className="text-dark mb-4">
              At TenderHavenEdu, we believe that every child is a star waiting
              to shine. Our nurturing environment, creative learning methods,
              and passionate educators ensure that your little one embarks on a
              joyful journey of discovery, growth, and excellence!
            </p>
            <div className="row mb-4">
              <div className="col-lg-6">
                <h6 className="mb-3">
                  <i className="fas fa-check-circle me-2"></i>Sport Activities
                </h6>
                <h6 className="mb-3">
                  <i className="fas fa-check-circle me-2 text-primary"></i>
                  Outdoor Games
                </h6>
                <h6 className="mb-3">
                  <i className="fas fa-check-circle me-2 text-secondary"></i>
                  Nutritious Foods
                </h6>
              </div>
              <div className="col-lg-6">
                <h6 className="mb-3">
                  <i className="fas fa-check-circle me-2"></i>Highly Secured
                </h6>
                <h6 className="mb-3">
                  <i className="fas fa-check-circle me-2 text-primary"></i>
                  Friendly Environment
                </h6>
                <h6>
                  <i className="fas fa-check-circle me-2 text-secondary"></i>
                  Qualified Teacher
                </h6>
              </div>
            </div>
            <a href="#" className="btn btn-primary px-5 py-3 btn-border-radius">
              More Details
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClick={handleCloseModal}
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                {videoSrc && (
                  <iframe
                    src={videoSrc}
                    className="embed-responsive-item"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HompageAbout;
