import Button from "../Shared/Button/Button";
import "./Card.css";

export default function Card({
    _id,
    name,
    imageUrl,
    description,
    price
}) {
  return (
    <article className="card">
      <div className="card__img">
        <img
          className="thumbnail__img"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="card__content">
        <h2 className="content__title">{name}</h2>
        <p className="content__badge">Price: {price}</p>
        <p className="content__section-title">{description}</p>
       <Button>Add To Cart</Button>
      </div>
    </article>
  );
}
