import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const teamMembers = [
  {
    id: 1,
    name: "Linda Carlson",
    role: "English Teacher",
    image: "img/team-1.jpg",
    socials: [
      { icon: "fas fa-share-alt", href: "#" },
      { icon: "fab fa-facebook-f", href: "#" },
      { icon: "fab fa-twitter", href: "#" },
      { icon: "fab fa-instagram", href: "#" },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    role: "Math Teacher",
    image: "img/team-2.jpg",
    socials: [
      { icon: "fas fa-share-alt", href: "#" },
      { icon: "fab fa-facebook-f", href: "#" },
      { icon: "fab fa-twitter", href: "#" },
      { icon: "fab fa-instagram", href: "#" },
    ],
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Science Teacher",
    image: "img/team-3.jpg",
    socials: [
      { icon: "fas fa-share-alt", href: "#" },
      { icon: "fab fa-facebook-f", href: "#" },
      { icon: "fab fa-twitter", href: "#" },
      { icon: "fab fa-instagram", href: "#" },
    ],
  },
  {
    id: 4,
    name: "Michael Johnson",
    role: "History Teacher",
    image: "img/team-4.jpg",
    socials: [
      { icon: "fas fa-share-alt", href: "#" },
      { icon: "fab fa-facebook-f", href: "#" },
      { icon: "fab fa-twitter", href: "#" },
      { icon: "fab fa-instagram", href: "#" },
    ],
  },
];

const Team = () => {
  return (
    <div>
      <div
        className="container-fluid page-header py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4">Our Team</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-white" aria-current="page">
                Our Team
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Our Team
            </h4>
            <h1 className="mb-5 display-3">Meet With Our Expert Teacher</h1>
          </div>

          {/* Owl Carousel */}
          <OwlCarousel className="owl-theme" loop margin={10} nav>
            {teamMembers.map((member) => (
              <div className="item" key={member.id}>
                <div className="team-item border border-primary img-border-radius overflow-hidden">
                  <img
                    src={member.image}
                    className="img-fluid w-100"
                    alt={member.name}
                  />
                  <div className="team-icon d-flex align-items-center justify-content-center">
                    {member.socials.map((social, index) => (
                      <div
                        key={index}
                        className="share-link btn btn-primary btn-md-square text-white rounded-circle me-3"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i className={social.icon}></i>
                      </div>
                    ))}
                  </div>
                  <div className="team-content text-center py-3">
                    <h4 className="text-primary">{member.name}</h4>
                    <p className="text-muted mb-2">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Team;
