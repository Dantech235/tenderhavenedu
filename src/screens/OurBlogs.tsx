const OurBlog = () => {
  return (
    <div>
      {/* Page Header Start */}
      <div
        className="container-fluid page-header py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4">Our Blog</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-white" aria-current="page">
                Our Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Blog Start */}
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Latest News & Blog
            </h4>
            <h1 className="mb-5 display-3">Read Our Latest News & Blog</h1>
          </div>
          <div className="row g-5 justify-content-center">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-6 col-xl-4 wow fadeIn"
                data-wow-delay={`${index * 0.2}s`}
              >
                <div className="blog-item rounded-bottom">
                  <div className="blog-img overflow-hidden position-relative img-border-radius">
                    <img
                      src={`img/blog-${index + 1}.jpg`}
                      className="img-fluid w-100"
                      alt="Blog"
                    />
                  </div>
                  <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                    <small className="text-dark">
                      <i className="fas fa-calendar me-1 text-dark"></i> 29 Nov
                      2023
                    </small>
                    <small className="text-dark">
                      <i className="fas fa-comment-alt me-1 text-dark"></i>{" "}
                      Comments (15)
                    </small>
                  </div>
                  <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
                    <div className="overflow-hidden rounded-circle rounded-top border border-primary">
                      <img
                        src="img/program-teacher.jpg"
                        className="img-fluid rounded-circle p-2 rounded-top"
                        alt="Author"
                        style={{
                          width: "70px",
                          height: "70px",
                          borderStyle: "dotted",
                          borderColor: "var(--bs-primary)",
                        }}
                      />
                    </div>
                    <div className="ms-3">
                      <h6 className="text-primary">Mary Mordern</h6>
                      <p className="text-muted">Baby Care</p>
                    </div>
                  </div>
                  <div className="px-4 pb-4 bg-light rounded-bottom">
                    <div className="blog-text-inner">
                      <a href="#" className="h4">
                        “Learning Through Play: Why Fun is the Best Teacher”
                      </a>
                      <p className="mt-3 mb-4">
                        Explores how children absorb knowledge best through
                        play-based learning, combining fun and education
                        effectively.
                      </p>
                    </div>
                    <div className="text-center">
                      <a
                        href="#"
                        className="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Blog End */}
    </div>
  );
};

export default OurBlog;
