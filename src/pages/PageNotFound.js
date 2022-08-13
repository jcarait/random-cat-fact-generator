import { Navigate } from "react-router-dom";
import image404 from "../images/404.jpg";

export default function PageNotFound({ errorMessage }) {
  return (
    <div className="bg-page-not-found">
      {!errorMessage && <Navigate to="/" replace={true} />}
      <div className="image-container">
        <img
          className="image-404"
          src={image404}
          alt="cat holding sign with label 404"
        ></img>
        <p className="error-message">Error Message: {errorMessage}</p>
        <a
          className="attribution"
          href="https://www.freepik.com/vectors/unavailable"
        >
          Unavailable vector created by pikisuperstar - www.freepik.com
        </a>
      </div>
    </div>
  );
}
