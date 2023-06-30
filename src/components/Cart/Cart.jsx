import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubtotal } = useContext(Context);

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {products: cartItems});

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      });
    } catch (error) {
      console.log(error);
    }
  }


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
        {!cartItems?.length && <div className="empty-cart">
          <BsCartX />
          <span>No products in the cart.</span>
          <button className="return-cta">Return to shop</button>
        </div>}
        {!!cartItems?.length && <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal: </span>
              <span className="text total">&#8377;{cartSubtotal}</span>
            </div>
            <div className="button">
              <div className="checkout-cta" onClick={() => handlePayment}>Checkout</div>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Cart;
