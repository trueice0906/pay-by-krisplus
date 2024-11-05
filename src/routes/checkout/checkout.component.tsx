import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { AppState } from "../../state";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import Button from "../../components/button/button.component";

export default function Checkout() {
  const cartItems = useSelector((state: AppState) => state.cartState.cartItems);
  const cartTotal = cartItems.reduce(
    (total, cartItem: any) => total + cartItem.quantity * cartItem.price,
    0
  );

  const payByKrisplus = async () => {
    try {

      // Open a new window and write the QR code into it
      const paymentWindow = window.open(
        "",
        "pay by Krisplus window",
        "width=500,height=500"
      );
      if (paymentWindow) {
        paymentWindow.document.write(`
          <html>
            <head>
              <title>Pay by Krisplus</title>
            </head>
            <body>
              <div id="qrCode" style="display: flex; align-items: center; justify-content: center; height: 100vh;">
                <img src="data:image/png;base64,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" alt="QR Code" />
              </div>
            </body>
          </html>
        `);
        paymentWindow.document.close();
      }
    } catch (error) {
      console.error("Failed to generate QR code", error);
    }
  };

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
