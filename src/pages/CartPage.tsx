import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import CartItem from '../components/cartItem/CartItem';
import Layout from '../components/Layout';
import CartContext from '../context/cart/CartContext';

const CartPage = () => {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);
  const funcs = { increase, decrease, removeProduct, clearCart };
  const [message, setMessage] = useState('');

  const CartItemsGrid = () => {
    return (
      <>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <CartItem {...item} key={item.id} {...funcs} />
            ))}
            <form action='/create-checkout-session' method='POST'>
              <Button type='submit'>Checkout</Button>
            </form>
          </div>
        ) : (
          <p>Your cart is empty!</p>
        )}
      </>
    );
  };

  const handleCheckout = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const line_items = cartItems.map((item) => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'eur',
          unit_amount: item.price * 100, // amount is in cents
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.image],
          },
        },
      };
    });
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    <Layout>
      {message !== '' ? (
        <section>
          <p>{message}</p>
        </section>
      ) : (
        <CartItemsGrid />
      )}
    </Layout>
  );
};

export default CartPage;
