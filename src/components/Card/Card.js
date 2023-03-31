import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProductsContext } from "../../contexts/ProductsContext";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteProduct } from "../../services/productService";

import Button from "../Shared/Button/Button";
import DeleteDialog from "../Shared/DeleteDialog/DeleteDialog";
import "./Card.css";

export default function Card({ _id, name, imageUrl, description, price }) {
  const navigate = useNavigate();
  const { isAdmin, token } = useContext(AuthContext);
  const { removeProduct } = useContext(ProductsContext);
  const [showDialog, setShowDialog] = useState(false);

  function onDeleteProduct() {
    setShowDialog(true);
  }

  function deleteDialogHandler(isDelete) {
    setShowDialog(false);
    if (isDelete) {
      deleteProduct(_id, token);
      removeProduct(_id);
    }
  }

  function onEditProduct() {
    navigate(`/edit-product/${_id}`);
  }

  return (
    <>
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
            <Button onClickHandler={onDeleteProduct}>Delete</Button>
          </div>
        )}
      </article>

      {showDialog && (
        <DeleteDialog productName={name} resultHandler={deleteDialogHandler} />
      )}
    </>
  );
}
