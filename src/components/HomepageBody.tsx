import "../scss/bootstrap.scss";
// import Footer from "./Footer";
import HomeBlog from "./HomeBlog";
import HomeEvents from "./HomeEvents";
import HomePrograms from "./HomePrograms";
import HomeService from "./HomeService";
// import HomeTeam from "./HomeTeam";
import HomeTestimonial from "./HomeTestimonial";
import HompageAbout from "./HompageAbout";

const HomepageBody = () => {
  return (
    <div>
      <div
        className="container-fluid py-5  hero-header wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7  col-md-12">
              <h1 className="mb-3 text-primary ">Nurturing Young Minds,</h1>
              <h1 className="mb-5 display-1 text-white">
                Shaping Bright Futures!
              </h1>

              <div className="flex  gap-1.5 items-center justify-center">
                <button className="btn btn-primary px-4 py-3 px-md-5 me-4 btn-border-radius">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HompageAbout />
      <HomeService />
      <HomePrograms />
      <HomeEvents />

      <HomeBlog />
      {/* <HomeTeam /> */}
      <HomeTestimonial />
    </div>
  );
};

export default HomepageBody;
