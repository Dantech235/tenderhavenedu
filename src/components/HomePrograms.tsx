const HomePrograms = () => {
  return (
    <div className="container-fluid py-5 program">
      <div className="container py-5">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: "700px" }}
        >
          <h4 className="text-primary mb-4 border-b border-primary border-2 inline-block p-2 title-border-radius">
            Our Programs
          </h4>
          <h1 className="mb-5 display-3">
            We Offer An Exclusive Program For Kids
          </h1>
        </div>
        <div className="row g-5 justify-content-center">
          {["1", "2", "3"].map((index) => (
            <div
              key={index}
              className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
              data-wow-delay={`0.${index}s`}
            >
              <div className="program-item rounded">
                <div className="program-img relative">
                  <div className="overflow-hidden img-border-radius">
                    <img
                      src={`img/program-${index}.jpg`}
                      className="img-fluid w-full"
                      alt="Program"
                    />
                  </div>
                  {/* <div className="px-4 py-2 bg-primary text-white program-rate">
                    $60.99
                  </div> */}
                </div>
                <div className="program-text bg-white px-4 pb-3">
                  <div className="program-text-inner">
                    <a href="#" className="h4">
                      Early Literacy & Reading Program
                    </a>
                    <p className="mt-3 mb-0">
                      Storytelling sessions, Phonics & sight words, Reading
                      comprehension activities, Library visits & book fairs
                    </p>
                  </div>
                </div>
                <div
                  className="program-teacher flex items-center border-t border-primary bg-white px-4 py-3"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="img/program-teacher.jpg"
                    className="img-fluid rounded-circle p-2 border border-primary bg-white"
                    alt="Teacher"
                    style={{ width: "70px", height: "70px" }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-0 text-primary">Mary Mordern</h6>
                    <small>Arts Designer</small>
                  </div>
                </div>
                <div className="d-flex justify-between px-4 py-2 bg-primary rounded-b">
                  <small className="text-white">
                    <i className="fas fa-wheelchair me-1"></i> 30 Sits
                  </small>
                  <small className="text-white">
                    <i className="fas fa-book me-1"></i> 11 Lessons
                  </small>
                  <small className="text-white">
                    <i className="fas fa-clock me-1"></i> 60 Hours
                  </small>
                </div>
              </div>
            </div>
          ))}
          <div
            className="d-inline-block text-center wow fadeIn"
            data-wow-delay="0.1s"
          >
            <a
              href="#"
              className="btn btn-primary px-5 py-3 text-white btn-border-radius"
            >
              View All Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePrograms;
