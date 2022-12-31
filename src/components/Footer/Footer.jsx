import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="containerFooter">
        <div className="container containFooter">
          <div className="footerUp d-flex justify-content-center align-items-center">
            <div className="iconEmail">
              <FontAwesomeIcon className="iconFooter" icon={faEnvelope} />
            </div>
            <div className="mx-4">
              <h6 className="textFooterUp">
                Regístrese Para Estar al Día con las Noticias De NVIDIA
              </h6>
            </div>
            <div>
              <button type="button" className="btn btn-primary btnFooter">
                Registrarse
              </button>
            </div>
          </div>
          <div className="footerDown text-center">
            <div className="textFooterDown">Copyright © 2022 Micaela Gomez</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;