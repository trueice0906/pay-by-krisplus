import { useState } from 'react';
import ShoppingIcon from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../state';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';

const CartIcon = () => {
  const cartCount = useSelector((state: AppState) => state.cartState.cartCount);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <img src={ShoppingIcon} alt="" />
        <span className='item-count'>{cartCount}</span>
      </div>
      {isCartOpen && <CartDropdown />}
    </>
  );
};

export default CartIcon;