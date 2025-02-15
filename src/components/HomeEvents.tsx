import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "../scss/bootstrap.scss";

const HomeEvents = () => {
  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
  };

  return (
    <div className="container-fluid py-5 bg-light events">
      <div className="container py-5">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: "700px" }}
        >
          <h4 className="text-primary mb-4 border-b border-primary border-2 inline-block p-2 title-border-radius">
            Our Events
          </h4>
          <h1 className="mb-5 display-3">Our Upcoming Events</h1>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          {["1", "2", "3"].map((index) => (
            <div
              key={index}
              className="wow fadeIn"
              data-wow-delay={`0.${index}s`}
            >
              <div className="events-item bg-primary rounded shadow-lg overflow-hidden">
                <div className="events-inner relative">
                  <div className="events-img overflow-hidden rounded-xl relative">
                    <img
                      src={`img/event-${index}.jpg`}
                      className="img-fluid w-full rounded-xl"
                      alt="Event"
                    />
                    <div className="event-overlay">
                      <a
                        href={`img/event-${index}.jpg`}
                        data-lightbox={`event-${index}`}
                      >
                        <i className="fas fa-search-plus text-white fa-2x"></i>
                      </a>
                    </div>
                  </div>

                  <div className="d-flex justify-between px-4 py-2 bg-secondary rounded-b-lg">
                    <small className="text-white">
                      <i className="fas fa-calendar me-1 text-primary"></i>{" "}
                      10:00am - 12:00pm
                    </small>
                    <small className="text-white">
                      <i className="fas fa-map-marker-alt me-1 text-primary"></i>{" "}
                      Isolo, Lagos
                    </small>
                  </div>
                </div>
                <div className="events-text p-4 border border-primary bg-white border-t-0 rounded-b-2xl">
                  <a href="#" className="h4">
                    {index === "1" && "Tech Conference 2024"}
                    {index === "2" && "Music & Arts Festival"}
                    {index === "3" && "Entrepreneurs Networking"}
                  </a>
                  <p className="mb-0 mt-3">
                    {index === "1" &&
                      "Join industry leaders for an insightful discussion on emerging tech trends."}
                    {index === "2" &&
                      "Experience live music, art exhibitions, and creative workshops."}
                    {index === "3" &&
                      "Connect with top entrepreneurs, investors, and innovators."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default HomeEvents;
