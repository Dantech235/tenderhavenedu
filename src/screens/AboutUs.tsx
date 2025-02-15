import React from "react";

const AboutUs: React.FC = () => {
  const handleVideoClick = (videoSrc: string) => {
    const iframe = document.getElementById("video") as HTMLIFrameElement;
    iframe.src = videoSrc;
  };

  return (
    <div>
      <div
        className="container-fluid page-header py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-white" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

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
                  onClick={() =>
                    handleVideoClick(
                      "https://www.youtube.com/embed/eIho2S0ZahI"
                    )
                  }
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
                Where young minds blossom, curiosity thrives, and dreams take
                flight!
              </h1>
              <p className="text-dark mb-4">
                At TenderHavenEdu, we nurture young minds with love, learning,
                and laughter. Our mission is to create a safe, joyful, and
                inspiring environment where children explore, grow, and discover
                their full potential—one step, one smile, and one lesson at a
                time.
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
              <a
                href="#"
                className="btn btn-primary px-5 py-3 btn-border-radius"
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
