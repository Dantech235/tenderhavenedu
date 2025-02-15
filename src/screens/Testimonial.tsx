import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/bootstrap.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import teamplayer from "../assets/jpeg/img/testimonial-1.jpg";
import teamplayer2 from "../assets/jpeg/img/teamplayer-2.jpeg";
import teamplayer3 from "../assets/jpeg/img/testimonial-3.jpg";
import teamplayer4 from "../assets/jpeg/img/testimonial-2.jpg";

const testimonials = [
  {
    name: "Aisha Bello",
    profession: "Fashion Designer",
    image: teamplayer,
    review:
      "Their creativity and professionalism are unmatched. I was truly impressed with the outcome of our collaboration!",
  },
  {
    name: "Chukwudi Nwosu",
    profession: "Entrepreneur",
    image: teamplayer2,
    review:
      "The best experience I've had working with a company! Their dedication and innovation are top-notch.",
  },
  {
    name: "Oluwaseun Adeyemi",
    profession: "Digital Marketer",
    image: teamplayer3,
    review:
      "I am beyond satisfied with the work they did for my brand. Truly exceptional service!",
  },
  {
    name: "Fatima Yusuf",
    profession: "Medical Doctor",
    image: teamplayer4,
    review:
      "Their attention to detail and commitment to excellence made all the difference. I highly recommend them!",
  },
];

const Testimonial = () => {
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
          autoplay
          autoplayTimeout={3000}
          autoplayHoverPause
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="item">
              <div className="testimonial-item img-border-radius bg-light border border-primary w-fit p-4">
                <div className="p-4 position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-primary position-absolute"
                    style={{ top: "15px", right: "15px" }}
                  ></i>
                  <div className="d-flex align-items-center">
                    <div
                      className="border border-primary bg-white rounded-circle p-2"
                      style={{ borderStyle: "dotted" }}
                    >
                      <img
                        src={testimonial.image}
                        className="rounded-circle"
                        style={{ width: "80px", height: "80px" }}
                        alt="testimonial"
                      />
                    </div>
                    <div className="ms-4 pt-4">
                      <h4 className="text-dark">{testimonial.name}</h4>
                      <p className="m-0 pb-3">{testimonial.profession}</p>
                      <div className="d-flex pe-5">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-primary"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="border-top border-primary mt-4 pt-3">
                    <p className="mb-0">{testimonial.review}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
