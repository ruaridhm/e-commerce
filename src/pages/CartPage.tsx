import { Button } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/cartItem/CartItem';
import Layout from '../components/Layout';
import CartContext from '../context/cart/CartContext';

const CartPage = () => {
  const cartContext = useContext(CartContext);

  const cartItems = cartContext.cartState.items;
  return (
    <Layout>
      {Object.keys(cartItems).length > 0 ? (
        <div>
          {Object.keys(cartItems).map((value, index) => {
            let _items = cartItems[value];

            if (_items.length > 0) {
              return (
                <CartItem
                  key={index}
                  item={_items[0]}
                  quantity={_items.length}
                />
              );
            } else {
              return null;
            }
          })}
          <Link to='/checkout'>
            <Button>Checkout</Button>
          </Link>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </Layout>
  );
};

export default CartPage;
