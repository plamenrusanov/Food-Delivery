import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProductsContext } from "../../../contexts/ProductsContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { deleteProduct } from "../../../services/productService";

import Button from "../../Shared/Button/Button";
import DeleteDialog from "../../Shared/DeleteDialog/DeleteDialog";
import AddItemDialog from "../../ShopCart/AddItemDialog/AddItemDialog";

import "./Card.css";

export default function Card({product}) {

  const navigate = useNavigate();
  const { isAdmin, token } = useContext(AuthContext);
  const { removeProduct } = useContext(ProductsContext);
 
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);

  function deleteDialogHandler(isDelete) {
    setShowDeleteDialog(false);
    if (isDelete) {
      deleteProduct(product._id, token);
      removeProduct(product._id);
    }
  }

  function closeAddDialogHandler(){
    setShowAddDialog(false);
  }

  function onAddToCart(){
    setShowAddDialog(true);
  }

  function onDeleteProduct() {
    setShowDeleteDialog(true);
  }

  function onEditProduct() {
    navigate(`/edit-product/${product._id}`);
  }

  return (
    <>
      <article className="card">
        <div className="card__img">
          <img className="thumbnail__img" src={product.imageUrl} alt={product.name} />
        </div>
        <div className="card__content">
          <h2 className="content__title">{product.name}</h2>
          <p className="content__badge">Price: {product.price.toFixed(2)}</p>
          <p className="content__section-title">{product.description}</p>
          <Button onClickHandler={onAddToCart}>Add To Cart</Button>
        </div>
        {isAdmin && (
          <div className="admin_btn_holder">
            <Button onClickHandler={onEditProduct}>Edit</Button>
            <Button onClickHandler={onDeleteProduct}>Delete</Button>
          </div>
        )}
      </article>

      {showDeleteDialog && (
        <DeleteDialog productName={product.name} resultHandler={deleteDialogHandler} />
      )}

      {showAddDialog && (
        <AddItemDialog product={product}  hideDialog={closeAddDialogHandler} />
      )}
    </>
  );
}
