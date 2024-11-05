import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { AppState } from "../../state";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import Button from "../../components/button/button.component";

export default function Checkout() {
  const cartItems = useSelector((state: AppState) => state.cartState.cartItems);
  const cartTotal = cartItems.reduce((total, cartItem: any) => total + cartItem.quantity * cartItem.price, 0)

  const payByKrisplus = async () => {
    try {
      // Generate the QR code as a data URL
      // const qrCodeDataUrl = await QRCode.toDataURL(url);
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
