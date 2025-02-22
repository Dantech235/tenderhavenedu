import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/bootstrap.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { useState } from "react";

const testimonialVideos = [
  "/tendervideo1.mp4",
  "/tendervideo2.mp4",
  "/tendervideo1.mp4",
];

const Testimonial = () => {
  const [selectedVideo, setSelectedVideo] = useState("");

  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="mx-auto text-center" style={{ maxWidth: "700px" }}>
          <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
            Our Testimonials
          </h4>
          <h1 className="mb-5 display-3">Parents Say About Us</h1>
        </div>

        <OwlCarousel
          className="owl-theme"
          loop
          margin={20}
          nav
          autoplayHoverPause
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
        >
          {testimonialVideos.map((video, index) => (
            <div key={index} className="item">
              <div className="testimonial-item img-border-radius bg-light border border-primary w-100 p-4">
                <div className="position-relative video-container">
                  <video
                    className="w-100 h-100"
                    controls
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>

        {selectedVideo && (
          <div className="modal fade show d-block" tabIndex={-1}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title">Video</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedVideo("")}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="ratio ratio-16x9">
                    <video
                      className="w-100"
                      controls
                      autoPlay
                      style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                        maxHeight: "600px",
                      }}
                    >
                      <source src={selectedVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    
      <style>
        {`
          @media (min-width: 768px) {
            .video-container {
              height: 350px; 
              width: fit;
            }
            .video-container video {
              max-height: 350px;
            }
          }
          
          @media (min-width: 1024px) {
            .video-container {
              height: fit;
              width: fit;
            }
            .video-container video {
              max-height: 400px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Testimonial;
