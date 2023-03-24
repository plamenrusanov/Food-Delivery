import "./Button.css"
export default function Button({
    type,
    onClickHandler,
    children
}) {
  return (
    <div className="btn-holder">
      <button type={type} className="btn" onClick={onClickHandler}>{children}</button>
    </div>
  );
};
