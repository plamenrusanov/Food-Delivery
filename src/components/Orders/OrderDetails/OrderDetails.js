import "./OrderDetails.css";

export default function OrderDetails({ imageUrl, name, price, qty, subTotal }) {
  return (
    <main className="sci_body">
      <div className="sci_img_holder">
        <img className="sci_img" src={imageUrl} alt={name} />
      </div>
      <div className="sci_body_content">
        <h3>{name}</h3>
        <p className="sci_body_price">
          <span className="sci_label">Price</span>
          {price.toFixed(2)} EUR
        </p>
        <div className="sci_body_qty">
          <span className="sci_label">Quantity</span>
          <span className="sci_qty">{qty}</span>
        </div>
      </div>
      <div className="sci_div_sub_total">
        <div className="sci_body_sub_total">
          <p className="sci_label">Subtotal</p>
          <p>{subTotal.toFixed(2)} EUR</p>
        </div>
      </div>
    </main>
  );
}
