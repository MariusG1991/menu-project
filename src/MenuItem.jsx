const MenuItem = ({ img, title, desc, price }) => {
  return (
    <div className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{price}</h5>
          <p className="item-price">${price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
};
export default MenuItem;
