import { useReducer } from 'react';
import { CartContextProvider, initialCartState } from './CartContext';
import { cartReducer } from './CartReducer';

const CartState = ({ children }: any) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const cartContextValues = {
    cartState,
    cartDispatch,
  };

  return (
    <CartContextProvider value={cartContextValues}>
      {children}
    </CartContextProvider>
  );
};

export default CartState;
