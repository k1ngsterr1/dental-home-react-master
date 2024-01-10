import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./styles/error.css";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Данная страница несуществует</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="error-page">
        <div className="error-content">
          <h1 className="error-heading">404</h1>
          <button className="error-btn" onClick={() => navigate("/")}>
            Перейти на главную
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
