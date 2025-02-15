import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShareAlt,
} from "react-icons/fa";

const teamMembers = [
  { name: "Linda Carlson", role: "English Teacher", image: "/img/team-1.jpg" },
  { name: "Mark Spencer", role: "Math Teacher", image: "/img/team-2.jpg" },
  { name: "Samantha Lee", role: "Science Teacher", image: "/img/team-3.jpg" },
  { name: "John Doe", role: "History Teacher", image: "/img/team-4.jpg" },
];

const TeamSection = () => {
  return (
    <div className="container-fluid team py-5">
      <div className="container py-5">
        <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
          <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 rounded">
            Our Team
          </h4>
          <h1 className="mb-5 display-4">Meet Our Expert Teachers</h1>
        </div>

        <OwlCarousel
          className="owl-theme"
          loop
          margin={30}
          nav
          autoplay
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="item">
              <div className="team-item border border-primary rounded overflow-hidden">
                <img
                  src={member.image}
                  className="img-fluid w-100"
                  alt={member.name}
                />
                <div className="team-icon d-flex align-items-center justify-content-center">
                  <div
                    className="btn btn-primary btn-md-square text-white rounded-circle me-2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaShareAlt />
                  </div>
                  <div
                    className="btn btn-primary btn-md-square text-white rounded-circle me-2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaFacebookF />
                  </div>
                  <div
                    className="btn btn-primary btn-md-square text-white rounded-circle me-2"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaTwitter />
                  </div>
                  <div
                    className="btn btn-primary btn-md-square text-white rounded-circle"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaInstagram />
                  </div>
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
  );
};

export default TeamSection;
