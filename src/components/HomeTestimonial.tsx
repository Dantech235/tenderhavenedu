import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/bootstrap.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import avatar from "../../src/assets/svg/avatar-placeholder.svg";

const testimonials = [
  {
    name: "Favour Great",
    profession: "Fashion Designer",
    image: avatar,
    review: "Highly recommend for anyone seeking quality childcare",
  },
  {
    name: "Michael Okechukwu",
    profession: "Entrepreneur",
    image: avatar,
    review: "Excellent place to bring your kids",
  },
  {
    name: "Ezeh Sunday",
    profession: "Digital Marketer",
    image: avatar,
    review: "Our experience with Tender Haven has been outstanding",
  },
  {
    name: "Chidiebere Onuokoro",
    profession: "Enterpreneur",
    image: avatar,
    review: "The staff are the best, Always ready to step up whenever needed",
  },
  {
    name: "Dumbiri Jonadab",
    profession: "Manager",
    image: avatar,
    review: "Education at its peak, a place to be, Highly recommended",
  },
  {
    name: "Ramot Mosobalaje",
    profession: "Entrepreneur",
    image: avatar,
    review:
      "Best of all...i wish my work place is near so my baby will still be enjoying mrs edikan care..I really enjoyed tender haven creche during the little time my baby stayed.",
  },
  {
    name: "Tayo Victoria",
    profession: "Stylist",
    image: avatar,
    review:
      "The caring and professional staff create a warm and safe environment where my child feels happy and nurtured.",
  },
  {
    name: "Igbo nancy",
    profession: "Cooperate",
    image: avatar,
    review:
      "I wholeheartedly recommend this creche for its exceptional care and approach to early childhood education.",
  },
  {
    name: "Hope Ogochukwu",
    profession: "Stylist",
    image: avatar,
    review:
      "If you are looking for a school to give your child(ren) a stellar education, The answer is simple, Find a school like Tender Haven Creche.",
  },
  {
    name: "Ngozi Ellie Mgbomo",
    profession: "Cooperate",
    image: avatar,
    review:
      "The selfless care my baby got at Tender Haven was a joy that kept me at peace all through our creche days",
  },
  {
    name: "Oluwakemi Aderounmu",
    profession: "Entrepreneur",
    image: avatar,
    review:
      "A great place to keep your children. They have capable hands and are always looking for the good of your child.",
  },
  {
    name: "doris nj",
    profession: "Stylist",
    image: avatar,
    review:
      "Tender haven is just the best for your child, they take care of children like theirs.",
  },
  {
    name: "Jessica chinonye Ekemezie",
    profession: "Cooperate",
    image: avatar,
    review:
      "If you are looking for a creche with capable hands and one that  would have the interest of your child at heart heart.",
  },
  {
    name: "Ngozi Ellie Mgbomo",
    profession: "Cooperate",
    image: avatar,
    review:
      "The selfless care my baby got at Tender Haven was a joy that kept me at peace all through our creche days, i will recommend Tender Haven to anyone looking. ",
  },
  {
    name: "Easy analytics",
    profession: "business",
    image: avatar,
    review:
      "Tender Haven just as the name implies has become a 2nd home for our darling daughter. We are incredibly pleased with the services of the school.",
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
