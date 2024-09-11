import "./BusinessCard.css";

function BusinessCard() {
  const image = "./src/assets/profilepic.png";
  const svgImage = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <circle cx="4.983" cy="5.009" r="2.188" />
      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
    </svg>
  );
  const about = ` Frontend Developer |
                    Passionate about crafting user-friendly interfaces |
                    Proficient in HTML, CSS, JavaScript & frameworks |
                    Seeking opportunity to grow and collaborate.`;

  const interest = `Singing, drawing, digital art, and computer-aided crafting.`
  return (
    <div className="container-wrap">
    <div className="container">
      <img className="container-img" src={image} alt="profile picture" />
      <h3>Gabriella Moses Archibong</h3>
      <p className="container-p">Frontend Developer</p>
      <a href="mailto: gabriellamoses25@gmail.com" className="email">gabriellamoses25@gmail.com</a>
      <div className="container-btn">
        <button className="btn-1">
            <a href="https://mail.google.com/" className="btn-1">
          <img
            className="btn-1-img"
            src="./src/assets/Mail.png"
            alt="mail-logo"
          />{" "}
          Email
          </a>
        </button>
        <button className="btn-2"><a href="https://wwww.linkedin.com/in/gabriella-archibong-14a300265" className="btn-2">{svgImage} LinkedIn</a></button>
      </div>
      <div className="info-container">
        <div className="info-1">
          <h4>About</h4>
          <p className="info-para"> {about}</p>
        </div>
        <div className="info-2">
          <h4>Interest</h4>
          <p className="info-para">{interest}</p>
        </div>
      </div>
      <footer>
        <div className="links">
            <a href="https://x.com/GabriellaM46597"><img src="./src/assets/Twitter Icon.png" alt="twitter-icon" /></a>
            <a href="https://www.instagram.com/gabriellaarchibong"><img src="./src/assets/Instagram Icon.png" alt="instagram-icon" /></a>
            <a href="https://www.facebook.com/gabriella.moses.10?mibextid=ZbWKwL"><img src="./src/assets/Facebook Icon.png" alt="facebook-icon" /></a>
            <a href="https:github.com/gabriellaarchibong"><img src="./src/assets/GitHub Icon.png" alt="github-icon" /></a>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default BusinessCard;
