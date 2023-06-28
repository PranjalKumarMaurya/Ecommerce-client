import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="image-container">
          <img src={prod} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">
            Product Name
            <MdClose className="close-btn" />{" "}
          </span>
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">&#8377;4576</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
