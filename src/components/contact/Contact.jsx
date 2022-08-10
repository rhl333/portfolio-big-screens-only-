import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="email">
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:rhlnegi333@outlook.com" target="_blank" without rel="noreferrer">
            rhlnegi333@outlook.com
          </a>
        </div>
        <div className="call">
          <i class="fa-solid fa-phone"></i>
          <a href="tel:+91 8449963545" target="_blank" without rel="noreferrer">
            +91 8449963545
          </a>
        </div>
        <div className="git">
          <i class="fa-brands fa-square-github"></i>
          <a href="https://github.com/rhl333" target="_blank" without rel="noreferrer">
            https://github.com/rhl333
          </a>
        </div>
        <div className="linkedin">
          <i class="fa-brands fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/rahul-negi-091232243" target="_blank" without rel="noreferrer">
            https://www.linkedin.com/in/rahul-negi-091232243
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
