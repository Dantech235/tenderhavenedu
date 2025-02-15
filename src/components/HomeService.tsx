import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/bootstrap.scss";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const services = [
  {
    icon: "fas fa-gamepad",
    title: "Study & Game",
    description:
      "Learning today, leading tomorrow,We make learning fun, engaging, and unforgettable!, Smart minds start with small steps!",
  },
  {
    icon: "fas fa-sort-alpha-down",
    title: "A to Z Programs",
    description:
      " A: Active Learning, Arts & Crafts,  B: Brain Development, Books & Storytelling, C: Creativity, Confidence Building...  Z: Zeal for Learning!",
  },
  {
    icon: "fas fa-users",
    title: "Expert Teacher",
    description:
      "Curiosity is the engine of achievement!, Little scientists, big discoveries!, From tiny experiments to giant dreams!, Every ‘why?’ leads to a new wonder!",
  },
  {
    icon: "fas fa-user-nurse",
    title: "Mental Health",
    description:
      "Kind hearts, bright minds, strong friendships!, We teach more than ABCs—we teach kindness, empathy, and confidence!, A happy child is a learning child!",
  },
];

const ServiceSection = () => {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5 text-center">
        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2">
          What We Do
        </h4>
        <h1 className="mb-5 display-3">
          Thanks To Get Started With Our Program
        </h1>
        <div className="row g-5">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center border border-primary bg-white service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-inner text-center">
                    <div className="p-4">
                      <i className={`${service.icon} fa-6x text-primary`}></i>
                    </div>
                    <a href="#" className="h4 d-block">
                      {service.title}
                    </a>
                    <p className="my-3">{service.description}</p>
                    <a
                      href="#"
                      className="btn btn-primary text-white px-4 py-2 my-2"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
