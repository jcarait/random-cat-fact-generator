import image404 from "../images/404.jpg";

export default function PageNotFound({ errorMessage }) {
  return (
    <div className="bg-page-not-found">
      <div className="image-container">
        <img
          className="image-404"
          src={image404}
          alt="cat holding sign with label 404"
        ></img>
        {errorMessage && (
          <p className="error-message" data-testid="error">
            Error Message: {errorMessage}{" "}
          </p>
        )}

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
