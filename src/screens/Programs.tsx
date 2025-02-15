import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const Programs = () => {
  const programData = [
    {
      image: "img/program-1.jpg",
      title: "English For Today",
      description: "Improve language skills with engaging activities.",
      teacherImage: "img/program-teacher.jpg",
      teacherName: "Mary Mordern",
      teacherRole: "Arts Designer",
      seats: 30,
      lessons: 11,
      hours: 60,
    },
    {
      image: "img/program-2.jpg",
      title: "Graphics Arts",
      description: "Learn creative and digital design techniques.",
      teacherImage: "img/program-teacher.jpg",
      teacherName: "John Doe",
      teacherRole: "Graphic Designer",
      seats: 25,
      lessons: 12,
      hours: 50,
    },
    {
      image: "img/program-3.jpg",
      title: "General Science",
      description: "Explore scientific concepts in an interactive way.",
      teacherImage: "img/program-teacher.jpg",
      teacherName: "Jane Smith",
      teacherRole: "Science Instructor",
      seats: 40,
      lessons: 15,
      hours: 70,
    },
  ];

  return (
    <>
      <div
        className="container-fluid page-header py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4">Programs</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-white" aria-current="page">
                Programs
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-fluid program py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "700px" }}
          >
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Our Programs
            </h4>
            <h1 className="mb-5 display-3">
              Explore Our Exclusive Learning Programs
            </h1>
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={30}
            nav
            autoplay
            autoplayTimeout={3000}
            responsive={{
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 3 },
            }}
          >
            {programData.map((program, index) => (
              <div className="program-item rounded" key={index}>
                <div className="program-img position-relative">
                  <div className="overflow-hidden img-border-radius">
                    <img
                      src={program.image}
                      className="img-fluid w-100"
                      alt="Program"
                    />
                  </div>
                </div>
                <div className="program-text bg-white px-4 pb-3">
                  <div className="program-text-inner">
                    <a href="#" className="h4">
                      {program.title}
                    </a>
                    <p className="mt-3 mb-0">{program.description}</p>
                  </div>
                </div>
                <div className="program-teacher d-flex align-items-center border-top border-primary bg-white px-4 py-3">
                  <img
                    src={program.teacherImage}
                    className="img-fluid rounded-circle p-2 border border-primary bg-white"
                    alt="Teacher"
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0 text-primary">{program.teacherName}</h6>
                    <small>{program.teacherRole}</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between px-4 py-2 bg-primary rounded-bottom">
                  <small className="text-white">
                    <i className="fas fa-wheelchair me-1"></i> {program.seats}{" "}
                    Seats
                  </small>
                  <small className="text-white">
                    <i className="fas fa-book me-1"></i> {program.lessons}{" "}
                    Lessons
                  </small>
                  <small className="text-white">
                    <i className="fas fa-clock me-1"></i> {program.hours} Hours
                  </small>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Programs;
