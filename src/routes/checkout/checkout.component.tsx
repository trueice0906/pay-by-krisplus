import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { AppState } from "../../state";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import Button from "../../components/button/button.component";
import QRCode from "qrcode";

export default function Checkout() {
  const cartItems = useSelector((state: AppState) => state.cartState.cartItems);
  const cartTotal = cartItems.reduce(
    (total, cartItem: any) => total + cartItem.quantity * cartItem.price,
    0
  );

  const payByKrisplus = async () => {
    const url =
      "krispay://payment_deeplink?pos_id=t1&callback=https%3A%2F%2Fwww.myonlinestore.com%2Fkp-payment-callback&payment_amt=34.99&currency=AUD&qr_timestamp=1722326071&payment_ref=txn3216352";
    try {
      // Generate the QR code as a data URL
      const qrCodeDataUrl = await QRCode.toDataURL(url);

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
                <img src="${qrCodeDataUrl}" alt="QR Code" />
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
