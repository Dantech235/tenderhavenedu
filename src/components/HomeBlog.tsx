import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/bootstrap.scss";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      imgSrc: "img/blog-1.jpg",
      date: "29 Nov 2023",
      comments: 15,
      authorImg: "img/program-teacher.jpg",
      authorName: "Mary Mordern",
      category: "Tender Haven",
      title: "Learning Through Play: Why Fun is the Best Teacher",
      description:
        "Explores how children absorb knowledge best through play-based learning, combining fun and education effectively",
    },
    {
      id: 2,
      imgSrc: "img/blog-2.jpg",
      date: "29 Nov 2023",
      comments: 15,
      authorImg: "img/program-teacher.jpg",
      authorName: "Mary Mordern",
      category: "TenderHaven",
      title:
        "The A to Z of Child Development: Milestones Every Parent Should Know",
      description:
        "Covers key developmental stages from infancy to early school years and how parents can support each phase.",
    },
    {
      id: 3,
      imgSrc: "img/blog-3.jpg",
      date: "29 Nov 2023",
      comments: 15,
      authorImg: "img/program-teacher.jpg",
      authorName: "Mary Mordern",
      category: "TenderHaven",
      title: "Unlocking Your Childs Potential: The Power of Early Education",
      description:
        "Highlights the importance of early childhood education in shaping cognitive, emotional, and social development.",
    },
  ];

  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div className="mx-auto text-center" style={{ maxWidth: "600px" }}>
          <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
            Latest News & Blog
          </h4>
          <h1 className="mb-5 display-3">Read Our Latest News & Blog</h1>
        </div>
        <div className="row g-5 justify-content-center">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-6 col-xl-4">
              <div className="blog-item rounded-bottom">
                <div className="blog-img overflow-hidden position-relative img-border-radius">
                  <img
                    src={post.imgSrc}
                    className="img-fluid w-100"
                    alt="Blog"
                  />
                </div>
                <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                  <small className="text-dark">
                    <i className="fas fa-calendar me-1 text-dark"></i>{" "}
                    {post.date}
                  </small>
                  <small className="text-dark">
                    <i className="fas fa-comment-alt me-1 text-dark"></i>{" "}
                    Comments ({post.comments})
                  </small>
                </div>
                <div className="blog-content d-flex align-items-center px-4 py-3 bg-light">
                  <div className="overflow-hidden rounded-circle rounded-top border border-primary">
                    <img
                      src={post.authorImg}
                      className="img-fluid rounded-circle p-2 rounded-top"
                      alt="Author"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderStyle: "dotted",
                      }}
                    />
                  </div>
                  <div className="ms-3">
                    <h6 className="text-primary">{post.authorName}</h6>
                    <p className="text-muted">{post.category}</p>
                  </div>
                </div>
                <div className="px-4 pb-4 bg-light rounded-bottom">
                  <div className="blog-text-inner">
                    <a href="#" className="h4">
                      {post.title}
                    </a>
                    <p className="mt-3 mb-4">{post.description}</p>
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
  );
};

export default Blog;
