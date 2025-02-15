import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/bootstrap.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const services = [
  {
    title: "Interactive Learning",
    icon: "fas fa-laptop-code",
    description:
      "Engage with modern e-learning tools that make studying fun and effective.",
  },
  {
    title: "Personalized Mentorship",
    icon: "fas fa-user-tie",
    description:
      "Get one-on-one mentorship from experienced professionals in various fields.",
  },
  {
    title: "Skill-Based Programs",
    icon: "fas fa-tools",
    description:
      "Practical courses designed to equip you with real-world skills.",
  },
  {
    title: "Wellness & Support",
    icon: "fas fa-heartbeat",
    description:
      "Comprehensive mental health and counseling support for students.",
  },
];

const Services = () => {
  return (
    <div>
      <div
        className="container-fluid page-header py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4">Our Services</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-white" aria-current="page">
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-fluid service py-5">
        <div className="container py-5 text-center">
          <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
            What We Offer
          </h4>
          <h1 className="mb-5 display-3">
            Empowering You with Quality Education
          </h1>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={20}
            nav
            autoplay
            autoplayTimeout={3000}
            autoplayHoverPause
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
          >
            {services.map((service, index) => (
              <div key={index} className="item">
                <div className="text-center border-primary border bg-white service-item p-4">
                  <div className="p-4">
                    <i className={`${service.icon} fa-6x text-primary`}></i>
                  </div>
                  <h4 className="mt-3">{service.title}</h4>
                  <p className="my-3">{service.description}</p>
                  <a
                    href="#"
                    className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Services;
