import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [dissaled, setDissabled] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const form = e.target as HTMLFormElement;
      setDissabled(true);

      emailjs
        .sendForm(
          "service_vjuk6bn",
          "template_tpae1pl",
          form,
          "i6oD7hY7QjhBteVLj"
        )
        .then(
          (response) => {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            console.log(response);
            setDissabled(false);
          },
          (error) => {
            setStatus("Failed to send the message. Please try again later.");
            console.log(error);
          }
        );
    } else {
      setStatus("Please fill in all fields.");
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div
        className="container-fluid page-header py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4">Contact Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-white" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div
              className="mx-auto text-center wow fadeIn"
              data-wow-delay="0.1s"
              style={{ maxWidth: "700px" }}
            >
              <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                Contact Us
              </h4>
              <h1 className="display-3">Contact For Any Query</h1>
              <p className="mb-5">
                We're here for you! Reach out to us—because every great journey
                in education begins with a simple hello.
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
            </div>
            <div className="row g-5 mb-5">
              {/* Address, Mail, and Telephone */}
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div
                  className="flex w-auto border border-primary p-3 rounded bg-white"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Address</h4>
                    <p className="mb-2 truncate">
                      3 Adekunle Araba Str, Ire Akari Estate, Isolo
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div
                  className="flex  w-auto  border border-primary p-4 rounded bg-white"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Mail Us</h4>
                    <p className="mb-2">INFO@TENDERHAVEN.COM</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div
                  className="flex items-center w-auto border border-primary p-4 rounded bg-white"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Telephone</h4>
                    <p className="mb-2">(+234) 09084989609</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="w-100 form-control py-3 mb-5 border-primary"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    className="w-100 form-control py-3 mb-5 border-primary"
                    placeholder="Enter Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <textarea
                    className="w-100 form-control mb-5 border-primary"
                    rows={8}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <button
                    className="w-100 btn btn-primary form-control py-3 border-primary text-white bg-primary"
                    type="submit"
                    disabled={dissaled}
                  >
                    Submit
                  </button>
                </form>
                {status && <p>{status}</p>}
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="border border-primary h-100 rounded">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    className="w-100 h-100 rounded"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
