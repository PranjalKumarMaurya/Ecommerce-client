import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      s<div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <div className="heading">Cart</div>
          <div className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
          </div>
        </div>
        {/* <div className="empty-cart">
          <BsCartX />
          <span>Np products in cart.</span>
          <button className="return-cta">Return to shop</button>
        </div> */}
        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal: </span>
              <span className="text total">&#8377;1234</span>
            </div>
            <div className="button">
              <div className="checkout-cta">Checkout</div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
