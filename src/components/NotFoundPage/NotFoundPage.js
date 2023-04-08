import { useNavigate } from "react-router-dom";

import Button from "../Shared/Button/Button";

import "./NotFoundPage.css";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="error_page_holder">
      <div className="error_page_content">
        <h1 className="error_page_title">404 Not Found</h1>
        <p className="error_page_text">
          Sorry, the page you are looking for could not be found.
        </p>
        <div className="error_page_buttons">
          <Button onClickHandler={() => navigate(-1)}>Go back</Button>
          <Button onClickHandler={() => navigate("/")}>
            Go to home page
          </Button>
        </div>
      </div>
    </div>
  );
}
