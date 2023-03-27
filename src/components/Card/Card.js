import Button from "../Shared/Button/Button";
import "./Card.css";

export default function Card({
    _id,
    name,
    imageUrl,

}) {
  return (
    <article className="card">
      <div className="card__img">
        <img
          className="thumbnail__img"
          src="https://res.cloudinary.com/doyj9avxq/image/upload/v1650192045/xoyztizdub79sxq2dplp.jpg"
          alt="shopska salad"
        />
      </div>
      <div className="card__content">
        <h2 className="content__title">Plamen Rusanov</h2>
        <p className="content__badge">.Net Developer</p>
        <h3 className="content__section-title">Projects</h3>
       <Button>Add To Cart</Button>
      </div>
    </article>
  );
}
