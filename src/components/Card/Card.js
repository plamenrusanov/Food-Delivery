import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import Button from "../Shared/Button/Button";
import "./Card.css";

export default function Card({ _id, name, imageUrl, description, price }) {
  const navigate  = useNavigate();
  const { isAdmin } = useContext(AuthContext);
  function onEditProduct() {
    navigate(`/edit-product/${_id}`);
  }

  return (
    <article className="card">
      <div className="card__img">
        <img className="thumbnail__img" src={imageUrl} alt={name} />
      </div>
      <div className="card__content">
        <h2 className="content__title">{name}</h2>
        <p className="content__badge">Price: {price}</p>
        <p className="content__section-title">{description}</p>
        <Button>Add To Cart</Button>
      </div>
      {isAdmin && (
        <div className="admin_btn_holder">
          <Button onClickHandler={onEditProduct}>Edit</Button>
          <Button>Delete</Button>
        </div>
      )}
    </article>
  );
}
