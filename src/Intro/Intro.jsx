import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Intro = () => {
  return (
    <section class="Intro">
      <img
        class="baofei-logo"
        src="/Images/Logo-Baofei.png"
        alt="Baofei Logo"
      />

      <div className="social-media">
        <a href="https://Twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faTwitter}
            className="twitter-logo"
            color="rgba(255, 255, 255, 0.767)"
            size="3x"
          />
        </a>

        <a href="https://Instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            className="instagram-logo"
            color="rgba(255, 255, 255, 0.767)"
            size="3x"
          />
        </a>

        <a
          href="https://www.facebook.com/baofeiofficial"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="facebook-logo"
            color="rgba(255, 255, 255, 0.767)"
            size="3x"
          />
        </a>
      </div>
    </section>
  );
};

export default Intro;
