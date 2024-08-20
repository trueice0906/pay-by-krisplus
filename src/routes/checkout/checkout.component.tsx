import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { AppState } from "../../state";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import Button from "../../components/button/button.component";

export default function Checkout() {
  const cartItems = useSelector((state: AppState) => state.cartState.cartItems);
  const cartTotal = cartItems.reduce((total, cartItem: any) => total + cartItem.quantity * cartItem.price, 0)

  const payByKrisplus = () => {

  }

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem: { id: number }) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">TOTAL: ${cartTotal}</div>
        <div className="pay-btn">
          <Button onClick={payByKrisplus}>PAY BY KRISPLUS</Button>
        </div>
      </div>
    </>
  );
}
